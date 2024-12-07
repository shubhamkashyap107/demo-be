import express from "express"
import cors from "cors"


const app = express()
app.use(cors());

let data = [

  {
    "id": 1,
    "name": "Emily",
    "skills": ["JavaScript", "React"],
    "rating": 4.8,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 2,
    "name": "Angela",
    "skills": ["Python", "Data Science"],
    "rating": 4.9,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 3,
    "name": "Alex Johnson",
    "skills": ["Java", "Spring Boot"],
    "rating": 4.7,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 4,
    "name": "Rohan",
    "skills": ["Machine Learning", "TensorFlow"],
    "rating": 4.6,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },

  {
    "id": 5,
    "name": "Emily",
    "skills": ["JavaScript", "React"],
    "rating": 4.8,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 6,
    "name": "Angela",
    "skills": ["Python", "Data Science"],
    "rating": 4.9,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 7,
    "name": "Alex Johnson",
    "skills": ["Java", "Spring Boot"],
    "rating": 4.7,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }

    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 8,
    "name": "Rohan",
    "skills": ["Machine Learning", "TensorFlow"],
    "rating": 4.6,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },

  {
    "id": 9,
    "name": "Emily",
    "skills": ["JavaScript", "React"],
    "rating": 4.8,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 10,
    "name": "Angela",
    "skills": ["Python", "Data Science"],
    "rating": 4.9,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 11,
    "name": "Alex Johnson",
    "skills": ["Java", "Spring Boot"],
    "rating": 4.7,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 12,
    "name": "Rohan",
    "skills": ["Machine Learning", "TensorFlow"],
    "rating": 4.6,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },

  {
    "id": 13,
    "name": "Emily",
    "skills": ["JavaScript", "React"],
    "rating": 4.8,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 14,
    "name": "Angela",
    "skills": ["Python", "Data Science"],
    "rating": 4.9,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="

  },
  {
    "id": 15,
    "name": "Alex Johnson",
    "skills": ["Java", "Spring Boot"],
    "rating": 4.7,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="
     },
  {
    "id": 16,
    "name": "Rohan",
    "skills": ["Machine Learning", "TensorFlow"],
    "rating": 4.6,
    "bio": "Helping individuals reach their career goals for over 10 years.",
    "availableSlots": [
      { "date": "2024-12-21", "slots": ["08:00 AM - 09:00 AM", "03:00 PM - 04:00 PM"] },
      { "date": "2024-12-22", "slots": ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM"] },
      { "date": "2024-12-23", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-24", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] },
      { "date": "2024-12-25", "slots": ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM"] }
    ],
    "portrait": "https://media.istockphoto.com/id/1587315781/photo/happy-laughing-guy-posing-with-arms-folded.webp?a=1&b=1&s=612x612&w=0&k=20&c=pQjzvhpF0m66H5O9YMIgM6tAjtP1BUoAP4ChXnIpJTA="
  }

  
]
  
  app.get("/mentors", (req, res) => {
    let {num} = req.query

    let arr = num ? data.slice(0,num) : data

    res.status(200).json(arr)
  })


  app.get("/profile", (req, res) => {
    let {id} = req.query

    let foundItem = data.find((item) => {
      return item.id == id
    })

    res.status(200).json(foundItem)
  })









app.listen(8080, () => {
    console.log("Server Connected")
})