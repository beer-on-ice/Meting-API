import { get_runtime } from "./util.js"

let OVERSEAS = globalThis?.Deno?.env?.get("OVERSEAS") || globalThis?.process?.env?.OVERSEAS
const YT_API = 'https://xiaoneng.ml/meting/api'
const runtime = get_runtime()

if (['cloudflare', 'vercel'].includes(runtime)) OVERSEAS = true

const PORT = globalThis?.Deno?.env?.get("PORT") || globalThis?.process?.env?.PORT || 3000

OVERSEAS = Boolean(OVERSEAS)

export default {
    YT_API,
    OVERSEAS,
    PORT
}
