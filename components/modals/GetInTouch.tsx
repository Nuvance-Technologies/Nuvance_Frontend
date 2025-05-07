"use client";

import { Close } from '@/icons/others/Close';
import { useState } from 'react';
import axios from 'axios';

enum ProjectType {
    WebsiteDevelopment = 'WebsiteDevelopment',
    MobileAppDevelopment = 'MobileAppDevelopment',
    UIUXDesign = 'UIUXDesign',
    ContentWriting = 'ContentWriting',
    Other = 'Other'
}

enum Timeline {
    lessThanOneMonth = 'lessThanOneMonth',
    oneToThreeMonths = 'oneToThreeMonths',
    threeToSixMonths = 'threeToSixMonths',
    moreThanSixMonths = 'moreThanSixMonths',
    flexible = 'flexible'
}

enum ContactMethod {
    email = 'email',
    phoneCall = 'phoneCall',
    videoCall = 'videoCall',
    whatsapp = 'whatsapp'
}

interface FormData {
    fullname: string;
    companyName?: string;
    email: string;
    contactNumber: string;
    projectType: ProjectType;
    projectDescription: string;
    estimatedBudget?: string;
    timeline?: Timeline;
    contactMethod?: ContactMethod;
    additionalInfo?: string;
}

interface GetInTouchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GetInTouchModal({ isOpen, onClose }: GetInTouchModalProps) {
    const [formData, setFormData] = useState<FormData>({
        fullname: '',
        email: '',
        contactNumber: '',
        projectType: ProjectType.WebsiteDevelopment,
        projectDescription: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean, message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //     setSubmitStatus(null);

    //     try {
    //         const response = await fetch('YOUR_BACKEND_ENDPOINT_HERE', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (!response.ok) throw new Error('Network response was not ok');

    //         setSubmitStatus({ success: true, message: 'Thank you! We will contact you soon.' });
    //         setFormData({
    //             fullname: '',
    //             email: '',
    //             contactNumber: '',
    //             projectType: ProjectType.WebsiteDevelopment,
    //             projectDescription: '',
    //         });

    //         setTimeout(() => onClose(), 3000);
    //     } catch (error) {
    //         setSubmitStatus({ success: false, message: 'Failed to submit. Please try again.' });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
    
        try {
            const response = await axios.post(`http://localhost:3001/api/v1/getintouch/add`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            
            setSubmitStatus({ 
                success: true, 
                message: `Thank you ${response.data.fullName}! We will contact you soon.` 
            });
            
            // Reset form
            setFormData({
                fullname: '',
                companyName: '',
                email: '',
                contactNumber: '',
                projectType: ProjectType.WebsiteDevelopment,
                projectDescription: '',
                estimatedBudget: '',
                timeline: undefined,
                contactMethod: undefined,
                additionalInfo: ''
            });
    
            // Close modal after 3 seconds
            setTimeout(() => onClose(), 3000);
    
        } catch (error) {
            let errorMessage = 'Failed to submit. Please try again.';
            
            if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.message || error.message;
            }
    
            setSubmitStatus({ 
                success: false, 
                message: errorMessage 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                    >
                        <Close/>
                    </button>
                </div>

                {submitStatus ? (
                    <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {submitStatus.message}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Required Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Project Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={ProjectType.WebsiteDevelopment}>Website Development</option>
                                <option value={ProjectType.MobileAppDevelopment}>Mobile App Development</option>
                                <option value={ProjectType.UIUXDesign}>UI/UX Design</option>
                                <option value={ProjectType.ContentWriting}>Content Writing</option>
                                <option value={ProjectType.Other}>Other</option>
                            </select>
                        </div>

                        {/* Project Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Project Description *</label>
                            <textarea
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Optional Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget *</label>
                                <input
                                    type="text"
                                    name="estimatedBudget"
                                    value={formData.estimatedBudget || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                                <select
                                    name="timeline"
                                    value={formData.timeline || ''}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select timeline</option>
                                    <option value={Timeline.lessThanOneMonth}>Less than 1 month</option>
                                    <option value={Timeline.oneToThreeMonths}>1-3 months</option>
                                    <option value={Timeline.threeToSixMonths}>3-6 months</option>
                                    <option value={Timeline.moreThanSixMonths}>More than 6 months</option>
                                    <option value={Timeline.flexible}>Flexible</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                            <select
                                name="contactMethod"
                                value={formData.contactMethod || ''}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select contact method</option>
                                <option value={ContactMethod.email}>Email</option>
                                <option value={ContactMethod.phoneCall}>Phone Call</option>
                                <option value={ContactMethod.videoCall}>Video Call</option>
                                <option value={ContactMethod.whatsapp}>WhatsApp</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo || ''}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-end space-x-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}