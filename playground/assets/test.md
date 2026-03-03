# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Параграфы и инлайн

Обычный параграф с **жирным текстом**, _курсивом_ и **_жирным курсивом_**.
Также ~~зачёркнутый текст~~ и `инлайн код`.

Вот [ссылка на Google](https://google.com) и [ссылка с тайтлом](https://google.com "Google").

Автоссылка: https://example.com

---

## Код

Инлайн: `const x = 42`

Блок без языка:

```
npm install marked
```

Блок с языком:

```typescript
interface EditorProps {
  value: string
  onChange: (value: string) => void
}

const MDEditor = ({ value, onChange }: EditorProps) => {
  return <div>{value}</div>
}
```

```javascript
async function fetchData(url) {
  const res = await fetch(url);
  return res.json();
}
```

```css
.container {
  display: flex;
  gap: 1rem;
  background-color: #282c34;
}
```

---

## Цитаты

> Простая цитата

> Цитата с **жирным** и _курсивом_
>
> Второй параграф цитаты

> Вложенная цитата
>
> > Уровень два
> >
> > > Уровень три

---

## Списки

Ненумерованный:

- Пункт один
- Пункт два
  - Вложенный пункт
  - Ещё вложенный
- Пункт три

Нумерованный:

1. Первый
2. Второй
   1. Вложенный
   2. Ещё вложенный
3. Третий

Чекбоксы (GFM):

- [x] Выполнено
- [x] Тоже выполнено
- [ ] Не выполнено
- [ ] Ещё не выполнено

---

## Таблицы (GFM)

| Имя        | Тип      | Описание          |
| ---------- | -------- | ----------------- |
| `value`    | `string` | Текущее значение  |
| `onChange` | `func`   | Коллбэк изменения |
| `preview`  | `bool`   | Показывать превью |

Выравнивание:

| Левое  | Центр | Правое |
| :----- | :---: | -----: |
| один   |  два  |    три |
| четыре | пять  |  шесть |

---

## Картинки

![Alt текст](https://yastatic.net/naydex/yandex-search/LNMHy6457/5a781aiiG/7CicuA2VIy6NKASXdhp3EywrYmEwWscPOVZpdOZZLtWildcB_1gyFDvAGaeUjdwb-rpLfxPqnFqha9bEFLpU-oikZaBpIZKSPbC1E9q606eALl9hbF8H7 "Placeholder")

---

## Горизонтальные разделители

---

---

---

---

## HTML

<div style="color: red;">Прямой HTML в markdown</div>

<details>
  <summary>Раскрываемый блок</summary>
  Содержимое внутри details
</details>

---

## Переносы строк

Строка с двумя пробелами в конце  
переносится на новую строку.

Строка без пробелов
не переносится (если не включён breaks).

---

## Экранирование

\*не курсив\*
\`не код\`
\# не заголовок
\[не ссылка\]

---

## Ссылки-сноски

Это [ссылка-сноска][ref1] и ещё одна [ссылка][ref2].

[ref1]: https://example.com
[ref2]: https://example.org "Example Org"
