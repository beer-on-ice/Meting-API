const support_type = ['song', 'playlist']
const handle = async (type, id, cookie = '') => {
    let result
    const query = `?type=${type}&id=${id}`
    if (support_type.includes(type)) {
        result = await fetch('https://xiaoneng.ml/meting/api' + query)
        result = await result.json()
    } else {
        result = -1
    }

    return result
}

export default {
    register: (ctx) => {
        ctx.register('ytmusic', { handle, support_type })
    }
}
