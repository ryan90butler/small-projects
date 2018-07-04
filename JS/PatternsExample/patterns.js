
// publish-subscribe pattern "pub-sub"
const events = {
  events: {},

  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },

  emit(eventName, data){
    if (this.events[eventName]){
      this.events[eventName].forEach(fn => fn(data));
    }
  }
}

setTimeout(()=>{
  events.emit('onDataChange', {data: [1, 2, 3]})
}, 2000),

setTimeout(()=>{
  events.emit('something', 'this is working!!')
}, 5000)

module.exports = {
  event: events
}