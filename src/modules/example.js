import template from './example.pug'
import './example.scss'
import { data } from '../data/example.json'

console.log(data)

export default class Example {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(data)
  }
}
