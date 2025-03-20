"use client"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./ServiceDetailStyles.css"

const ServiceDetail = () => {
  const { id } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import("./WorkCardData")
        const WorkCardData = module.default
        const foundService = WorkCardData.find((item) => item.id === id)
        setService(foundService)
      } catch (error) {
        console.error("Error loading data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [id])

  if (loading) {
    return <div className="loading">Laddar...</div>
  }

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Tjänsten hittades inte</h2>
        <Link to="/#tjanster" className="btn">
          Tillbaka till tjänster
        </Link>
      </div>
    )
  }

  return (
    <div className="service-detail">
      <div className="service-header">
        <h1>{service.title}</h1>
        <p style={{ textShadow: "0 0 5px rgba(0, 0, 0, 0.7)" }}>{service.text}</p>
      </div>

      <div className="service-gallery">
        {service.detailImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img || "/placeholder.svg"} alt={`${service.title} - bild ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="back-button">
        <Link to="/#tjanster" className="btn">
          Tillbaka
        </Link>
      </div>
    </div>
  )
}

export default ServiceDetail

