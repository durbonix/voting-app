import Server from 'socket.io'

export default function startServer(store){
  const io = new Server().attach(8090)

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )

  // intial 'connection' event will trigger the
  // current app state to be sent to the client
  // note the action event below is highly insecure
  // allowing any connected client to broadcast events
  // and compromise the application
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store))
  })
}
