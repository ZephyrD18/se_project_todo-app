export default class Todo {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }

  _getTemplate() {
    const template = document.querySelector(this._selector);
    return template.content.querySelector(".todo").cloneNode(true);
  }

  _formatDueDate(dateValue) {
    const dueDate = new Date(dateValue);

    if (isNaN(dueDate)) return "";

    return `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  }

  _setEventListeners() {
    this._deleteBtn.addEventListener("click", () => {
      this._element.remove();
    });

    this._checkboxEl.addEventListener("change", () => {
      this._data.completed = this._checkboxEl.checked;
    });
  }

  getView() {
    this._element = this._getTemplate();

    this._nameEl = this._element.querySelector(".todo__name");
    this._checkboxEl = this._element.querySelector(".todo__completed");
    this._labelEl = this._element.querySelector(".todo__label");
    this._dateEl = this._element.querySelector(".todo__date");
    this._deleteBtn = this._element.querySelector(".todo__delete-btn");

    this._nameEl.textContent = this._data.name;
    this._checkboxEl.checked = this._data.completed;

    this._checkboxEl.id = `todo-${this._data.id}`;
    this._labelEl.setAttribute("for", `todo-${this._data.id}`);

    const formattedDate = this._formatDueDate(this._data.date);
    if (formattedDate) {
      this._dateEl.textContent = formattedDate;
    }

    this._setEventListeners();

    return this._element;
  }
}
