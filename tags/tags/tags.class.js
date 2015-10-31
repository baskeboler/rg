class RgTags extends RgSelect {

  constructor(opts) {
    super(opts)
    this._tags = opts.tags
    this._value = opts.value
  }

  get value() {
    return this._value || ''
  }
  set value(val) {
    this._value = val
    this.trigger('value')
  }

  get tags() {
    if (rg.isArray(this._tags)) return this._tags
    this._tags = []
    return this._tags
  }
  set tags(tags) {
    if (!rg.isArray(tags)) tags = []
    tags.forEach((item, i) => {
      item.index = i
    })
    this._tags = tags
    this.trigger('change')
  }

  addTag(tag) {
    tag.index = this.tags.length
    this.tags.push(tag)
    this.isvisible = false
    this.trigger('add', tag)
  }

  removeTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1)
    this.isvisible = false
    this.trigger('remove', tag)
  }
}
