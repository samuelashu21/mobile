# 🏥 Multilingual Medical AI Assistant

A production-ready multilingual Medical Question Answering system powered by Retrieval-Augmented Generation (RAG), fine-tuned mT5-LoRA, FAISS semantic search, and FastAPI backend services.

The application enables users to ask healthcare-related questions in both English and Amharic and receive evidence-based answers generated from retrieved medical knowledge.

---

# 🚀 Project Overview

The system combines:

* Fine-tuned Google mT5-small
* LoRA (PEFT)
* Retrieval-Augmented Generation (RAG)
* FAISS Vector Search
* Sentence Transformers
* FastAPI Backend
* React Native (Expo) Mobile Application
* Next.js Web Application

The goal is to provide accurate, explainable, and multilingual healthcare question answering.

---

# ✨ Features

## Medical Question Answering

Users can ask medical questions such as:

* What are the symptoms of HIV?
* How is malaria transmitted?
* What causes hypertension?
* የኤች አይ ቪ ምልክቶች ምንድናቸው?
* የወባ በሽታ እንዴት ይተላለፋል?

The system retrieves relevant medical examples and generates answers using the fine-tuned language model.

---

## English and Amharic Support

Supported Languages:

* English
* Amharic
* Auto Detection

The multilingual embedding model enables semantic retrieval across both languages.

---

## Retrieval-Augmented Generation (RAG)

Pipeline:

1. User submits question
2. Question encoded using Sentence Transformer
3. FAISS searches top-k similar examples
4. Retrieved examples become context
5. mT5-LoRA generates final answer
6. Evidence returned to user

---

## Explainable AI

Every answer includes:

* Retrieved evidence
* Similarity scores
* Confidence score
* Response time
* Explainability information

Users can inspect:

* Retrieved Questions
* Retrieved Answers
* Semantic Similarity Scores
* Confidence Visualization

---

## Confidence Scoring

The backend calculates confidence using semantic similarity scores returned from FAISS.

Displayed as:

* Percentage confidence
* Retrieval relevance score

Example:

Confidence: 96.7%

---

## Medical Evidence Display

Every generated answer includes supporting evidence:

* Retrieved Question
* Retrieved Answer
* Similarity Score

This helps users understand how the model generated its response.

---

## Chat History

The mobile application stores:

* Previous conversations
* Question history
* Generated responses

Powered by Zustand state management.

---

## Offline Cached Answers

Frequently asked questions are automatically cached.

Benefits:

* Faster response times
* Reduced API calls
* Offline access to previous responses

---

## Text-to-Speech

Users can listen to generated answers.

Features:

* English speech synthesis
* Amharic speech synthesis (device support dependent)

Powered by:

* expo-speech

---

## Speech-to-Text

Users can speak questions directly.

Features:

* Voice input
* Hands-free medical search

---

## Dark Mode

Supports:

* Light Theme
* Dark Theme
* System Theme

---

## Mobile Responsive Design

Works on:

* Android
* iOS
* Tablets

Built using:

* Expo
* React Native
* TypeScript

---

# 🧠 AI Model Architecture

## Base Model

google/mt5-small

---

## Fine-Tuning Method

PEFT LoRA

Advantages:

* Smaller checkpoints
* Faster deployment
* Lower memory usage

---

## Embedding Model

sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2

Used for:

* Semantic search
* Multilingual retrieval

---

## Vector Database

FAISS

Stores:

* Medical embeddings
* Similar question vectors

Provides:

* Fast nearest-neighbor search
* Semantic retrieval

---

# 📂 Project Structure

## Backend

backend/

├── app/

│ ├── models/

│ ├── routers/

│ ├── schemas/

│ ├── services/

│ ├── utils/

│ └── main.py

├── final_model/

├── medical_faiss.index

├── retrieval_corpus.csv

├── requirements.txt

└── Dockerfile

---

## Mobile Application

mobile/

├── app/

├── components/

├── screens/

├── services/

├── store/

├── hooks/

├── types/

├── utils/

└── assets/

---

# 🔌 Backend API

## Health Check

GET

/api/health

Response:

{
"status": "healthy"
}

---

## Chat Endpoint

POST

/api/chat/chat

Request:

{
"question":"What are the symptoms of HIV?",
"language":"english"
}

Response:

{
"answer":"...",
"confidence":0.96,
"response_time":1.12,
"sources":[]
}

---

## Explainability Endpoint

POST

/api/explain/explain

Request:

{
"question":"What are the symptoms of HIV?"
}

Response:

{
"retrieved_examples":[...],
"similarity_scores":[...],
"reasoning":"..."
}

---

# ⚙️ Installation

## Clone Repository

git clone YOUR_REPOSITORY_URL

cd project

---

## Backend Setup

Create virtual environment:

python -m venv .venv

Activate:

Windows

.venv\Scripts\activate

Linux/macOS

source .venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Run:

fastapi dev main.py

or

uvicorn main:app --host 0.0.0.0 --port 8000

---

## Mobile Setup

Install packages:

npm install

Start Expo:

npx expo start

Run on:

* Android Emulator
* iOS Simulator
* Physical Device

---

# 🌐 Deployment

## Backend

Supported Platforms:

* VPS
* Railway
* Render
* Azure VM
* AWS EC2
* DigitalOcean

---

## Frontend

Supported Platforms:

* Expo EAS
* Google Play Store
* Apple App Store

---

# 🔒 Security

Implemented Features:

* Input Validation
* Request Validation
* CORS Protection
* Error Handling
* Model Isolation
* Secure Environment Variables

---

# 📈 Future Improvements

Planned Features:

* User Accounts
* Doctor Dashboard
* Medical Knowledge Graph
* Drug Interaction Checker
* Symptom Checker
* Medical Image Analysis
* Appointment Scheduling
* Telemedicine Integration
* Medical Report Summarization
* LLM Fine-Tuning Dashboard

---

# 👨‍💻 Technology Stack

Frontend

* React Native
* Expo
* TypeScript
* Zustand
* Axios

Backend

* FastAPI
* Uvicorn
* Pydantic

AI

* Transformers
* PEFT LoRA
* mT5
* Sentence Transformers
* FAISS

Deployment

* Docker
* Nginx
* VPS

---

# 📄 License

MIT License

---

# 🙏 Acknowledgements

* Google mT5
* Hugging Face
* PEFT
* Sentence Transformers
* FAISS
* FastAPI
* Expo
* React Native

Built to improve access to multilingual healthcare information through explainable AI.
