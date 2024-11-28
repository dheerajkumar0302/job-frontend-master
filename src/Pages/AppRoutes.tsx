import { Divider } from '@mantine/core'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ApplyJobPage from './ApplyJob'
import CompanyPage from './CompanyPage'
import FindeJobs from './FindJobs'
import FindTalents from './FindTalents'
import HomePage from './HomePage'
import JobDescPage from './JobDescPage'
import JobHistoryPage from './JobHistoryPage'
import PostJobPage from './PostJobPage'
import PostedJobPage from './PostedJobPage'
import ProfilePage from './ProfilePage'
import SignUpPage from './SignUpPage'
import TalentProfile from './TalentProfile'
import { useSelector } from 'react-redux'

const AppRoutes = () => {
    const user = useSelector((state: any) => state.user)
    return (
        <BrowserRouter>
            <div className="relative">
                <Header />
                <Divider size="sm" mx="md" />
                <Routes>
                    {/* Correct syntax for Route's element prop */}
                    <Route path="/find-jobs" element={<FindeJobs />} />
                    <Route path="/find-Talent" element={<FindTalents />} />
                    <Route path="/jobs" element={<JobDescPage />} />
                    <Route path="/apply-job" element={<ApplyJobPage />} />

                    <Route path="/company" element={<CompanyPage />} />
                    <Route path="/posted-job" element={<PostedJobPage />} />
                    <Route path="/post-jobs" element={<PostJobPage />} />
                    <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUpPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/login" element={user ? <Navigate to="/" /> : <SignUpPage />} />
                    <Route path="/job-history" element={<JobHistoryPage />} />
                    <Route path="/talent-profile" element={<TalentProfile />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes
