export interface Scans {
  decoder: string
  timeAtDecode: string
  data: string
}

export interface MainListLocalState {
  ean8checked: boolean
  ean13checked: boolean
  code39checked: boolean
  code128checked: boolean
  lastApiVisible: boolean
  lastApiText: string
  checkBoxesDisabled: boolean
  scanButtonVisible: boolean
  dwVersionText: string
  activeProfileText: string
  enumeratedScannersText: string
  scans: Scans[]
}
