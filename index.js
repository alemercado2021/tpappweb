import {readFile} from 'fs/promises'
const dtProductos = await readFile('./data/productos.json','utf-8')
const dtVentas = await readFile('./data/ventas.json','utf-8')
const dtUsuarios = await readFile('./data/usuarios.json','utf-8')

const productos = JSON.parse(dtProductos)
const ventas = JSON.parse(dtVentas)
const usuarios = JSON.parse(dtUsuarios)

console.log(usuarios)