export interface SpaceType {
    padding?: {
        all?: number | string
        horizontal?: number | string
        vertical?: number | string
        top?: number | string
        bottom?: number | string
        left?: number | string
        right?: number | string
    }

    margin?: {
        all?: number | string
        horizontal?: number | string
        vertical?: number | string
        top?: number | string
        bottom?: number | string
        left?: number | string
        right?: number | string
    }
}

export const SpaceTheme = ({ padding: P, margin: M }: SpaceType) => {
    const p_all = P?.all
    const p_V = P?.vertical
    const p_H = P?.horizontal
    const p_T = P?.top
    const p_B = P?.bottom
    const p_L = P?.left
    const p_R = P?.right

    const m_all = M?.all
    const m_V = M?.vertical
    const m_H = M?.horizontal
    const m_T = M?.top
    const m_B = M?.bottom
    const m_L = M?.left
    const m_R = M?.right

    return {
        paddingTop: (p_all && p_all) || (p_V && p_V) || (p_T && p_T),
        paddingBottom: (p_all && p_all) || (p_V && p_V) || (p_B && p_B),
        paddingLeft: (p_all && p_all) || (p_H && p_H) || (p_L && p_L),
        paddingRight: (p_all && p_all) || (p_H && p_H) || (p_R && p_R),

        marginTop: (m_all && m_all) || (m_V && m_V) || (m_T && m_T),
        marginBottom: (m_all && m_all) || (m_V && m_V) || (m_B && m_B),
        marginLeft: (m_all && m_all) || (m_H && m_H) || (m_L && m_L),
        marginRight: (m_all && m_all) || (m_H && m_H) || (m_R && m_R),
    }
}
