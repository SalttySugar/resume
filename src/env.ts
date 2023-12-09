import * as S from "@effect/schema/Schema"

export type Env = S.Schema.To<typeof Env>
export const Env = S.struct({
  GOOGLE_TAG: S.string.pipe(S.message(() => "Google tag is required"))
});



export const env = S.parseSync(Env)(process.env, { errors: "all" });
