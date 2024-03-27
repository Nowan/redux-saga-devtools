import { effectTypes } from "redux-saga/effects"
import { IO } from "@redux-saga/symbols"
/**
 * A copy of asEffect from redux-saga 0.x
 * https://github.com/redux-saga/redux-saga/blob/0.x/src/internal/io.js#L183
 * 
 * With slight adjustments for new effect structure
 * https://github.com/redux-saga/redux-saga/blob/v1.0.0/CHANGELOG.md?plain=1#L22
 */
const createAsEffectType = type => effect => effect && effect[IO] && effect.type === type && effect.payload

export const asEffect = {
  take: createAsEffectType(effectTypes.TAKE),
  put: createAsEffectType(effectTypes.PUT),
  all: createAsEffectType(effectTypes.ALL),
  race: createAsEffectType(effectTypes.RACE),
  call: createAsEffectType(effectTypes.CALL),
  cps: createAsEffectType(effectTypes.CPS),
  fork: createAsEffectType(effectTypes.FORK),
  join: createAsEffectType(effectTypes.JOIN),
  cancel: createAsEffectType(effectTypes.CANCEL),
  select: createAsEffectType(effectTypes.SELECT),
  actionChannel: createAsEffectType(effectTypes.ACTION_CHANNEL),
  cancelled: createAsEffectType(effectTypes.CANCELLED),
  flush: createAsEffectType(effectTypes.FLUSH),
  getContext: createAsEffectType(effectTypes.GET_CONTEXT),
  setContext: createAsEffectType(effectTypes.SET_CONTEXT)
}

export default asEffect