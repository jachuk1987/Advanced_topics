import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Your backend WebSocket endpoint
export default socket;
