export function fnMapTree(treeData, lang = 'en', parent: any = null) {
  treeData.map((e) => {
    if (e?.base) {
      e.base = `/${lang}${e.base}`
    } else {
      if (e?.link && !parent?.base) {
        e.link = `/${lang}${e.link}`
      }
    }
    if (e?.items?.length > 0) {
      fnMapTree(e.items, lang, e)
    }
  })
}