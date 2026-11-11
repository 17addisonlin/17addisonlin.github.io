---
short_title: PeerLink
featured: true
featured_order: 2
repo_url: https://github.com/17addisonlin/Peer-to-Peer-File-Sharing-System
technologies: [JavaScript, WebRTC, WebSocket]
title: PeerLink P2P File Sharing System
description: A browser-based P2P file sharing demo using WebRTC data channels with a WebSocket signaling server and a 4-digit PIN pairing flow.
date: 2023-01-08 08:01:35 +0300
label: 
image: '/images/Project-PeerLink/p2p%20demo.jpg'
image_full: true
---

## Overview

PeerLink is a browser-based file sharing demo. Two devices pair using a four-digit PIN, then transfer files through a WebRTC data channel.

## What it does

- Connects two peers through a simple pairing flow.
- Transfers files directly between browsers.
- Uses a WebSocket server to exchange connection information.
- Provides guided steps for sending and receiving files.

## Built with

JavaScript, WebRTC, WebSocket, and Node.js, with an HTML and CSS interface. The current demo is designed for local-network use; internet connections may need TURN support.

The [project repository](https://github.com/17addisonlin/Peer-to-Peer-File-Sharing-System) includes local setup, troubleshooting, and planned improvements.
