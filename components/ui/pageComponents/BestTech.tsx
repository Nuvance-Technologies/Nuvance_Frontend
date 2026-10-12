"use client";

import Image from "next/image";
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
    name: string;
    placeholder: string;
}

interface TechCategory {
    category: string;
    icon: ReactNode;
    technologies: TechItem[];
}

const techData: TechCategory[] = [
    {
        category: "Front-end",
        icon: <FaReact className="w-6 h-6 text-blue-500" />,
        technologies: [
            { name: "React", placeholder: "/TechIcons/react.png" },
            { name: "JavaScript", placeholder: "/TechIcons/javascript.png" },
            { name: "Angular", placeholder: "/TechIcons/angular.png" },
            { name: "Vue", placeholder: "/TechIcons/vue.png" },
            { name: "Bootstrap", placeholder: "/TechIcons/bootstrap.png" },
        ],
    },
    {
        category: "Back-end",
        icon: <FaNodeJs className="w-6 h-6 text-emerald-600" />,
        technologies: [
            { name: "Node.js", placeholder: "/TechIcons/nodejs.png" },
            { name: "Python", placeholder: "/TechIcons/python.png" },
            { name: "Express", placeholder: "/TechIcons/express.png" },
            { name: "Java", placeholder: "/TechIcons/java.png" },
            { name: "Spring", placeholder: "/TechIcons/spring.png" },
            { name: "Go", placeholder: "/TechIcons/go.png" },
        ],
    },
    {
        category: "Mobile App Development",
        icon: <FaAndroid className="w-6 h-6 text-green-600" />,
        technologies: [
            { name: "Flutter", placeholder: "/TechIcons/flutter.png" },
            { name: "Swift", placeholder: "/TechIcons/swift.png" },
            { name: "Kotlin", placeholder: "/TechIcons/kotlin.png" },
            { name: "Ionic", placeholder: "/TechIcons/ionic.png" },
            { name: "Xcode", placeholder: "/TechIcons/xcode.png" },
        ],
    },
    {
        category: "Database",
        icon: <FaDatabase className="w-6 h-6 text-indigo-600" />,
        technologies: [
            { name: "MySQL", placeholder: "/TechIcons/mysql.png" },
            { name: "Oracle", placeholder: "/TechIcons/oracle.png" },
            { name: "MongoDB", placeholder: "/TechIcons/mongo.png" },
            { name: "DynamoDB", placeholder: "/TechIcons/dynamo.png" },
        ],
    },
    {
        category: "Servers & Cloud",
        icon: <FaServer className="w-6 h-6 text-sky-600" />,
        technologies: [
            { name: "AWS", placeholder: "/TechIcons/aws.png" },
            { name: "Google Cloud", placeholder: "/TechIcons/googlecloud.png" },
            { name: "Azure", placeholder: "/TechIcons/azure.png" },
            { name: "Firebase", placeholder: "/TechIcons/firebase.png" },
        ],
    },
    {
        category: "Big Data & Streaming",
        icon: <SiApachekafka className="w-6 h-6 text-red-600" />,
        technologies: [
            { name: "Kafka", placeholder: "/TechIcons/kafka.png" },
            { name: "Elasticsearch", placeholder: "/TechIcons/amazon_elas.png" },
            { name: "MongoDB", placeholder: "/TechIcons/mongo.png" },
            { name: "DynamoDB", placeholder: "/TechIcons/amazon_ddb.png" },
        ],
    },
    {
        category: "Project Management",
        icon: <FaLaptopCode className="w-6 h-6 text-blue-600" />,
        technologies: [
            { name: "Jira", placeholder: "/TechIcons/jira.png" },
            { name: "Confluence", placeholder: "/TechIcons/confluence.png" },
            { name: "Asana", placeholder: "/TechIcons/asana.png" },
            { name: "Trello", placeholder: "/TechIcons/trello.png" },
        ],
    },
];

export default function BestTech() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                {techData.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white border border-slate-200 rounded-md p-5 sm:p-6 lg:p-7 shadow-2xs hover:border-slate-300 transition-all flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10"
                    >
                        {/* Category Label */}
                        <div className="flex items-center gap-4 lg:w-[260px] flex-shrink-0">
                            <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-center flex-shrink-0 shadow-2xs">
                                {category.icon}
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                                    {category.category}
                                </h3>
                                <span className="text-xs text-slate-500 font-medium">
                                    {category.technologies.length} Frameworks & Tools
                                </span>
                            </div>
                        </div>

                        {/* Subtle Vertical Divider on Desktop */}
                        <div className="hidden lg:block w-px h-16 bg-slate-200 flex-shrink-0" />

                        {/* Technology Logos with Labels */}
                        <div className="w-full grid grid-cols-3 xs:grid-cols-4 sm:flex sm:flex-wrap sm:items-center gap-3.5 sm:gap-6 lg:gap-8 justify-items-center sm:justify-start">
                            {category.technologies.map((tech, techIndex) => (
                                <div
                                    key={techIndex}
                                    className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-2 rounded-xl bg-slate-50/80 group-hover:bg-blue-50/50 border border-slate-100 group-hover:border-blue-100 transition-colors shadow-2xs">
                                        <Image
                                            src={tech.placeholder || "/placeholder.svg"}
                                            alt={tech.name}
                                            className="max-h-11 max-w-11 sm:max-h-14 sm:max-w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <span className="text-[11px] sm:text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors text-center mt-1.5 leading-tight px-1">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
