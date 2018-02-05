import template from './menu.pug'
import './menu.scss'
import data from '../../data/menu.json'

export default class Menu {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(data)
  }
}
