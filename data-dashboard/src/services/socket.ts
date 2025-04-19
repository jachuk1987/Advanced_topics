import { io } from "socket.io-client";

const socket = io("ws://localhost:4000"); // Or your backend WebSocket URL

export default socket;
