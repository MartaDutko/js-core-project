const getSelector = selector => document.querySelector(selector)
let buttonEdit = getSelector(`.btEdit`)
buttonEdit.addEventListener(`click`, () => {
    getSelector(`.conteinerStyle`).classList.remove(`show`)
    getSelector(`.containerText`).classList.add(`show`)
    getSelector(`.textarea`).value = getSelector(`.topBlock`).innerHTML
})
let buttonSave = getSelector(`.btSave`)
buttonSave.addEventListener(`click`, () => {
    getSelector(`.topBlock`).innerHTML = getSelector(`.textarea`).value
    getSelector(`.containerText`).classList.remove(`show`)
})
let buttonStyle = getSelector(`.btStyle`)
buttonStyle.addEventListener(`click`, () => {
    getSelector(`.containerText`).classList.remove(`show`)
    getSelector(`.conteinerStyle`).classList.add(`show`)
})
getSelector(`.fontSize`).addEventListener(`click`, (event) => {
    getSelector(`.topBlock`).style.fontSize = event.target.value
})
getSelector(`.fontFamily`).onchange = (event) => {
    getSelector(`.topBlock`).style.fontFamily = event.target.value
}
let blockColor = getSelector(`.conteinerColor`)
let colors = [`black`, `red`, `green`, `gray`, `orange`, `purple`, `yellow`, `white`, `blue`]
for (let i = 0; i < colors.length; i++) {
    blockColor.children[i].style.backgroundColor = colors[i]
}
getSelector(`.btTextColor`).addEventListener(`click`, () => {
    getSelector(`.conteinerColor`).classList.add(`colorShow`)
})
getSelector(`.conteinerColor`).addEventListener(`click`, (e) => {
    getSelector(`.topBlock`).style.color = e.target.style.backgroundColor
    getSelector(`.conteinerColor`).classList.remove(`colorShow`)
})
let blockColorBack = getSelector(`.conteinerColorBac`)
let colorsBack = [`black`, `red`, `green`, `gray`, `orange`, `purple`, `yellow`, `white`, `blue`]
for (let i = 0; i < colorsBack.length; i++) {
    blockColorBack.children[i].style.backgroundColor = colorsBack[i]
}
getSelector(`.btBackgroundColor`).addEventListener(`click`, () => {
    getSelector(`.conteinerColorBac`).classList.add(`colorShow`)
})
getSelector(`.conteinerColorBac`).addEventListener(`click`, (e) => {
    getSelector(`.topBlock`).style.backgroundColor = e.target.style.backgroundColor
    getSelector(`.conteinerColorBac`).classList.remove(`colorShow`)
})
document.getElementById(`boldText`).addEventListener(`click`, () => {
    getSelector(`.topBlock`).style.fontWeight = document.getElementById(`boldText`).value
})
document.getElementById(`cursiveText`).addEventListener(`click`, () => {
    getSelector(`.topBlock`).style.fontStyle = document.getElementById(`cursiveText`).value
})
getSelector(`.btAdd`).addEventListener(`click`, () => {
    getSelector(`.conteiner`).classList.add(`invisible`)
    getSelector(`.chosenList`).classList.add(`show`)
})
document.getElementById(`list`).addEventListener(`click`, () => {
    getSelector(`.listBlock`).classList.add(`show`)
    getSelector(`.tableBlock`).classList.remove(`show`)
})
getSelector(`.createButton`).addEventListener(`click`, () => {
    let countLi = document.getElementById(`countLi`).value
    let ulCreate = document.createElement(`ul`)
    let typeMarks = document.getElementById(`typeMarks`).value
    for (let i = 0; i < countLi; i++) {
        let li = document.createElement(`li`)
        li.innerText = `Item ${i + 1}`
        li.type = typeMarks
        ulCreate.append(li)
    }
    getSelector(`.chosenList`).classList.remove(`show`)
    getSelector(`.conteiner`).classList.remove(`invisible`)
    getSelector(`.textarea`).value += ulCreate.innerHTML
    document.getElementById(`countLi`).value = ``
    document.getElementById(`typeMarks`).value = ``
})
document.getElementById(`table`).addEventListener(`click`, () => {
    getSelector(`.listBlock`).classList.remove(`show`)
    getSelector(`.tableBlock`).classList.add(`show`)
})
document.getElementById(`tableButton`).addEventListener(`click`, () => {
    let countRow = +document.getElementById(`countTr`).value
    let countColumn = +document.getElementById(`countTd`).value
    let table = document.createElement(`table`)
    let div = document.createElement(`div`)
    div.append(table)
    let widthColumn = + document.getElementById(`wightTd`).value
    let hightColumn = + document.getElementById(`heightTd`).value
    let width = +document.getElementById(`borderWidth`).value
    let type = document.getElementById(`typeBorder`).value
    let colorBorder = document.getElementById(`colorBorder`).value
    for (let i = 0; i < countRow; i++) {
        let row = document.createElement(`tr`)
        table.append(row)
        for (let i = 0; i < countColumn; i++) {
            let column = document.createElement(`td`)
            column.innerText = `TD`
            column.style.border = `${width}px ${type} ${colorBorder}`
            column.style.width = widthColumn + `px`
            column.style.height = hightColumn + `px`
            row.append(column)
        }
    }
    getSelector(`.textarea`).value += div.innerHTML
    getSelector(`.chosenList`).classList.remove(`show`)
    getSelector(`.conteiner`).classList.remove(`invisible`)
    document.getElementById(`countTr`).value = ``
    document.getElementById(`countTd`).value = ``
    document.getElementById(`wightTd`).value = ``
    document.getElementById(`heightTd`).value = ``
    document.getElementById(`borderWidth`).value = ``
    document.getElementById(`typeBorder`).value = ``
    document.getElementById(`colorBorder`).value = ``
})