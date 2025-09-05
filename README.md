# Performance Load App

This application monitors the performance of connected devices in real time. It collects system metrics such as CPU load, memory usage, uptime, operating system type, and CPU specifications from each device and displays them in a visual, easy-to-read dashboard.

## Key Features

- **Real-time CPU and memory monitoring** using animated canvas widgets.
- **Device identification** via MAC addresses to track multiple machines simultaneously.
- **Uptime tracking** to show how long each device has been online.
- **Detailed system info** including CPU type, number of cores, and clock speed.
- **WebSocket-based communication** between devices and the dashboard for instant updates.

## Technology Stack

- **Frontend:** React + TypeScript, Canvas API for visual widgets
- **Backend:** Node.js + Socket.IO for real-time communication
- **Utilities:** OS module for system metrics, Moment.js for uptime formatting
