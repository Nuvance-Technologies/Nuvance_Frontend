"use client"

import Image from "next/image"
import { ReactNode } from "react";
import {
    FaReact,
    FaLaptopCode,
    FaNodeJs,
    FaDatabase,
    FaAndroid,
    FaServer,
} from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";
interface TechItem {
    name: string
    placeholder: string
}

interface TechCategory {
    category: string
    icon: ReactNode
    technologies: TechItem[]
}

const techData: TechCategory[] = [
    {
        category: "Front-end",
        icon: <FaReact size={24} />,
        technologies: [
            { name: "", placeholder: "/TechIcons/angular.png" },
            { name: "", placeholder: "/TechIcons/javascript.png" },
            { name: "", placeholder: "/TechIcons/react.png" },
            { name: "", placeholder: "/TechIcons/bootstrap.png" },
            { name: "", placeholder: "/TechIcons/vue.png" },
        ],
    },
    {
        category: "Back-end",
        icon: <FaNodeJs size={24} />,
        technologies: [
            { name: "", placeholder: "/TechIcons/nodejs.png" },
            { name: "", placeholder: "/TechIcons/python.png" },
            { name: "", placeholder: "/TechIcons/express.png" },
            { name: "", placeholder: "/TechIcons/java.png" },
            { name: "", placeholder: "/TechIcons/spring.png" },
            { name: "", placeholder: "/TechIcons/go.png" },
        ],
    },
    {
        category: "Project Management",
        icon: <FaLaptopCode size={24} />,
        technologies: [
            { name: "", placeholder: "/TechIcons/jira.png" },
            { name: "", placeholder: "/TechIcons/asana.png" },
            { name: "", placeholder: "/TechIcons/trello.png" },
        ],
    },
    {
        category: "Big Data",
        icon: <SiApachekafka size={24} />,
        technologies: [
            { name: "", placeholder: "/TechIcons/amazon_elas.png" },
            { name: "", placeholder: "/TechIcons/mongo.png" },
            { name: "", placeholder: "/TechIcons/amazon_ddb.png" },
            { name: "", placeholder: "/TechIcons/dynamo.png" },
        ],
    },
    {
        category: "Mobile App Development",
        icon: <FaAndroid size={24} />,
        technologies: [
            { name: "", placeholder: "/TechIcons/swift.png" },
            { name: "", placeholder: "/TechIcons/ionic.png" },
            { name: "", placeholder: "/TechIcons/kotlin.png" },
            { name: "", placeholder: "/TechIcons/flutter.png" },
            { name: "", placeholder: "/TechIcons/xcode.png" },
        ],
    },
    {
        category: "Database",
        icon: <FaDatabase size={24} />,
        technologies: [
            { name: "", placeholder: "/TechIcons/mysql.png" },
            { name: "", placeholder: "/TechIcons/oracle.png" },
            { name: "", placeholder: "/TechIcons/mongo.png" },
        ],
    },
    {
        category: "Servers",
        icon: <FaServer size={24} />,
        technologies: [
            { name: "", placeholder: "/TechIcons/aws.png" },
            { name: "", placeholder: "/TechIcons/googlecloud.png" },
            { name: "", placeholder: "/TechIcons/azure.png" },
            { name: "", placeholder: "/TechIcons/firebase.png" },
        ],
    },
]

export default function BestTech() {
    return (
        <div className="w-full bg-mainBgColor flex justify-center">
            {/* Desktop Layout */}
            <div className="hidden lg:block p-8">
                <div className="max-w-7xl mx-auto space-y-10">
                    {techData.map((category, index) => (
                        <div key={index} className="flex items-center gap-12">
                            {/* Category Label */}
                            <div className="flex items-center gap-4 min-w-[250px]">
                                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    {category.icon}
                                </div>
                                <span className="text-gray-700 font-medium text-2xl">{category.category}</span>
                            </div>

                            {/* Technologies */}
                            <div className="flex items-center gap-10 flex-wrap">
                                {category.technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className="flex items-center hover:scale-110 cursor-pointer transition-all duration-500">
                                        <Image
                                            src={tech.placeholder || "/placeholder.svg"}
                                            alt={tech.name}
                                            className="w-32 h-32 object-contain"
                                            width={140}
                                            height={140}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Layout with Horizontal Scrolling Sliders */}
            <div className="lg:hidden w-full p-6">
                <div className="space-y-8">
                    {techData.map((category, index) => (
                        <div key={index} className="space-y-4">
                            {/* Category Header */}
                            <div className="text-center">
                                <h3 className="text-black font-bold text-xl mb-4">{category.category}</h3>
                            </div>

                            {/* Technologies - Horizontal Auto-Scrolling */}
                            <div className="relative overflow-hidden">
                                <div
                                    className="flex gap-4 animate-slide"
                                    style={{
                                        animation: "slideLeft 20s linear infinite",
                                        minWidth: "max-content"
                                    }}
                                >
                                    {category.technologies.concat(category.technologies).map((tech, techIndex) => (
                                        <div key={techIndex} className="flex items-center justify-center flex-shrink-0">
                                            <Image
                                                src={tech.placeholder || "/placeholder.svg"}
                                                alt={tech.name}
                                                className="object-contain"
                                                width={140}
                                                height={140}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
