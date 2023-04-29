const SliceCharTo14 = (char) => {
    if (!char) {
        return '---'
    } else if (char.length > 14) {
        return char.slice(0, 14) + '...'
    }
    return char
}

export default SliceCharTo14