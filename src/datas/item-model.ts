import {ItemModel} from '../models/item.model';

/*export const ItemModelData: ItemModel[] = [
  new ItemModel(1, 'Материнская плата', 'Запчасти для ПК' ),
  new ItemModel(2, 'Процессор', 'Запчасти для ПК'),
  new ItemModel(3, 'Оперативная память', 'Запчасти для ПК'),
  new ItemModel(4, 'Видеокарта', 'Запчасти для ПК'),
  new ItemModel(5, 'Жесткий диск', 'Запчасти для ПК'),
  new ItemModel(6, 'Мышь компьютерная', 'Периферия для ПК'),
  new ItemModel(7, 'Клавиатура', 'Периферия для ПК'),
  new ItemModel(8, 'Принтер лазерный', 'Периферия для ПК'),
  new ItemModel(9, 'Холодильник', 'Другое'),
  new ItemModel(10, 'Кофеварка', 'Другое'),
]*/

export const ItemData: ItemModel[] = [
  {_id: 1, name: 'Процессор', type: 'Запчасти'},
  {_id: 2, name: 'Мат.плата', type: 'Запчасти'},
  {_id: 3, name: 'Видекарта', type: 'Запчасти'},
  {_id: 4, name: 'Оперативная память', type: 'Запчасти'},
  {_id: 5, name: 'Жесткий диск', type: 'Запчасти'},
  {_id: 6, name: 'Мышь для ПК', type: 'Периферия'},
  {_id: 7, name: 'Клавиатура для ПК', type: 'Периферия'},
  {_id: 8, name: 'Принтер лазерный', type: 'Периферия'},
  {_id: 9, name: 'Холодильник', type: 'Другое'},
  {_id: 10, name: 'Кофеварка', type: 'Другое'}
];
