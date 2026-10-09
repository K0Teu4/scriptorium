/* Экспорт без html2canvas: сериализуем SVG и рисуем его на canvas нативно */
export function useExport(selector) {
  function serialize() {
    const svg = document.querySelector(selector)
    return new XMLSerializer().serializeToString(svg)
  }
  function downloadSvg() {
    const blob = new Blob([serialize()], { type: 'image/svg+xml' })
    trigger(URL.createObjectURL(blob), 'poster.svg')
  }
  async function downloadPng(scale = 2) {
    const svg = document.querySelector(selector)
    const vb = svg.viewBox.baseVal
    const url = URL.createObjectURL(new Blob([serialize()], { type: 'image/svg+xml' }))
    const img = new Image()
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url })
    const canvas = document.createElement('canvas')
    canvas.width = vb.width * scale
    canvas.height = vb.height * scale
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
    URL.revokeObjectURL(url)
    trigger(canvas.toDataURL('image/png'), 'poster.png')
  }
  function trigger(href, name) {
    const a = document.createElement('a')
    a.href = href
    a.download = name
    a.click()
  }
  return { downloadSvg, downloadPng }
}