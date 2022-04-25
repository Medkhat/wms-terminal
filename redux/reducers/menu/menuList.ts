export default [
  {
    id: 'acceptance',
    label: 'Приемка',
    subItems: [
      { id: 'subAcceptance', label: 'Приемка' },
      { id: 'return', label: 'Возврат' },
    ],
  },
  {
    id: 'acccomodation',
    label: 'Размещение',
    subItems: [
      { id: 'te', label: 'TE' },
      { id: 'commodities', label: 'Товары' },
    ],
  },
  {
    id: 'management',
    label: 'Управление товаром',
    subItems: [
      { id: 'managementInfo', label: 'Информация' },
      { id: 'moveTE', label: 'Переместить ТЕ' },
      { id: 'moveCommodity', label: 'Переместить товар' },
      { id: 'TEmanagement', label: 'Управление ТЕ' },
      { id: 'locks', label: 'Блокировки' },
      { id: 'inventory', label: 'Инвентаризация' },
    ],
  },
  { id: 'completing', label: 'Выполнение заданий' },
  { id: 'replenishment', label: 'Пополнение' },
  {
    id: 'assemblies',
    label: 'Сборки',
    subItems: [
      { id: 'assembly', label: 'Сборка' },
      { id: 'disassembly', label: 'Разборка' },
    ],
  },
  { id: 'check', label: 'Проверка' },
  {
    id: 'package',
    label: 'Посылка',
    subItems: [
      { id: 'packingParcels', label: 'Упаковка посылок' },
      { id: 'reprint', label: 'Перепечатать' },
      { id: 'packingList', label: 'Упаковочный лист' },
    ],
  },
  {
    id: 'shipment',
    label: 'Отгрузка',
    subItems: [
      { id: 'loading', label: 'Погрузка' },
      { id: 'unloading', label: 'Разгрузка' },
    ],
  },
]
