"use client"

import Image from "next/image"

interface ServiceItem {
    id: string
    title: string
    icon: string
}

const topRowServices: ServiceItem[] = [
    { id: "mobile-app", title: "Mobile App Development", icon: "/DiscoverIcons/appdev.png" },
    { id: "website-dev", title: "Website Development", icon: "/DiscoverIcons/webdev.png" },
    { id: "ecommerce", title: "E-commerce Development", icon: "/DiscoverIcons/ecommerce.png" },
    { id: "odoo-dev", title: "Odoo Development", icon: "/DiscoverIcons/odoo.jpeg" },
    { id: "cloud-services", title: "Cloud Services", icon: "/DiscoverIcons/cloud.png" },
]

const bottomRowServices: ServiceItem[] = [
    { id: "wordpress", title: "WordPress Development", icon: "/DiscoverIcons/wordpress.jpeg" },
    { id: "automation", title: "Work Automation / AI Automation", icon: "/DiscoverIcons/automation.png" },
    { id: "ai-ml", title: "AI/ML Implementation", icon: "/DiscoverIcons/aiml.png" },
    { id: "custom-software", title: "Custom Software Development", icon: "/DiscoverIcons/custom.png" },
    { id: "seo", title: "SEO Integration", icon: "/DiscoverIcons/seo.png" },
]

interface ServiceCardProps {
    service: ServiceItem
    onClick?: (serviceId: string) => void
}

function ServiceCard({ service, onClick }: ServiceCardProps) {
    return (
        <div className="service-card" onClick={() => onClick?.(service.id)}>
            <div className="service-icon-wrapper">
                <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="service-icon"
                />
            </div>
            <h3 className="service-title">{service.title}</h3>
        </div>
    )
}

interface ScrollingRowProps {
    services: ServiceItem[]
    direction?: "left" | "right"
    speed?: "slow" | "medium" | "fast"
    onServiceClick?: (serviceId: string) => void
}

function ScrollingRow({ services, direction = "left", speed = "slow", onServiceClick }: ScrollingRowProps) {
    // Duplicate services for seamless infinite scroll
    const duplicatedServices = [...services, ...services, ...services]

    const scrollClass = `scrolling-row ${direction === "left" ? "scroll-left" : "scroll-right"} ${speed}`

    return (
        <div className="scrolling-container">
            <div className={scrollClass}>
                {duplicatedServices.map((service, index) => (
                    <ServiceCard key={`${service.id}-${index}`} service={service} onClick={onServiceClick} />
                ))}
            </div>
        </div>
    )
}

interface DiscoverHeroProps {
    onServiceClick?: (serviceId: string) => void
}

export default function DiscoverHero({ onServiceClick }: DiscoverHeroProps) {
    const handleServiceClick = (serviceId: string) => {
        console.log(`Clicked service: ${serviceId}`)
        onServiceClick?.(serviceId)
    }

    return (
        <section className="discover-hero">
            <div className="discover-hero-container">
                {/* Scrolling Rows */}
                <div className="scrolling-rows">
                    {/* Top Row - Moving Left */}
                    <ScrollingRow services={topRowServices} direction="left" speed="slow" onServiceClick={handleServiceClick} />

                    {/* Bottom Row - Moving Right for visual variety */}
                    <ScrollingRow
                        services={bottomRowServices}
                        direction="right"
                        speed="slow"
                        onServiceClick={handleServiceClick}
                    />
                </div>
            </div>
        </section>
    )
}
