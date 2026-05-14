import { useState } from 'react'
import './App.css'

const curriculumTabs = [
  {
    id: 'courses-taught',
    label: 'Courses Taught',
    content:
      'Highlight syllabi, enrollment trends, and evidence of student learning outcomes across courses you have taught.',
  },
  {
    id: 'projects',
    label: 'Projects',
    content:
      'Document curriculum-focused projects and innovations, including goals, timeline, collaborators, and outcomes.',
  },
  {
    id: 'laboratory-creation',
    label: 'Laboratory Creation',
    content:
      'Describe laboratory design and implementation, including equipment decisions, safety planning, and instructional impact.',
  },
]

const beyondClassroomTabs = [
  {
    id: 'service-and-outreach',
    label: 'Service & Outreach',
    content:
      'Share outreach efforts, mentoring, committee service, and community engagement connected to your role as an educator.',
  },
  {
    id: 'professional-development',
    label: 'Professional Development',
    content:
      'Track workshops, conferences, and certifications that support your growth and classroom impact.',
  },
]

function App() {
  const [activePage, setActivePage] = useState('home')
  const [activeCurriculumTab, setActiveCurriculumTab] = useState(curriculumTabs[0].id)
  const [activeBeyondTab, setActiveBeyondTab] = useState(beyondClassroomTabs[0].id)

  const activeCurriculumContent = curriculumTabs.find(
    (tab) => tab.id === activeCurriculumTab,
  )
  const activeBeyondContent = beyondClassroomTabs.find((tab) => tab.id === activeBeyondTab)

  return (
    <div className="app-shell">
      <header>
        <h1>Tenure Portfolio</h1>
        <p className="subtitle">A teaching-focused portfolio website starter built with React and Vite.</p>
        <nav aria-label="Main pages">
          <ul className="page-nav">
            <li>
              <button type="button" className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>
                Home
              </button>
            </li>
            <li>
              <button type="button" className={activePage === 'curriculum' ? 'active' : ''} onClick={() => setActivePage('curriculum')}>
                Curriculum Development
              </button>
            </li>
            <li>
              <button type="button" className={activePage === 'beyond' ? 'active' : ''} onClick={() => setActivePage('beyond')}>
                Beyond the Classroom
              </button>
            </li>
            <li>
              <button type="button" className={activePage === 'letters' ? 'active' : ''} onClick={() => setActivePage('letters')}>
                Letters of Support
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {activePage === 'home' && (
          <section className="content-card">
            <h2>Home</h2>
            <p>
              Welcome to my tenure portfolio. This page can include general background information, teaching philosophy highlights, and links to supporting documents.
            </p>
            <p>
              <a href="#" aria-label="Curriculum vitae placeholder link">
                View Curriculum Vitae (CV)
              </a>
            </p>
            <h3>Teaching Philosophy</h3>
            <p>
              I aim to build an inclusive, evidence-based learning environment where students develop confidence through hands-on exploration and reflective practice.
            </p>
          </section>
        )}

        {activePage === 'curriculum' && (
          <section className="content-card">
            <h2>Curriculum Development</h2>
            <p className="section-intro">Add, remove, or rename tabs in <code>curriculumTabs</code> in <code>src/App.jsx</code> as your portfolio grows.</p>
            <ul className="tab-nav">
              {curriculumTabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    type="button"
                    className={activeCurriculumTab === tab.id ? 'active' : ''}
                    onClick={() => setActiveCurriculumTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <p>{activeCurriculumContent?.content}</p>
          </section>
        )}

        {activePage === 'beyond' && (
          <section className="content-card">
            <h2>Beyond the Classroom</h2>
            <p className="section-intro">Add, remove, or rename tabs in <code>beyondClassroomTabs</code> in <code>src/App.jsx</code> as needed.</p>
            <ul className="tab-nav">
              {beyondClassroomTabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    type="button"
                    className={activeBeyondTab === tab.id ? 'active' : ''}
                    onClick={() => setActiveBeyondTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <p>{activeBeyondContent?.content}</p>
          </section>
        )}

        {activePage === 'letters' && (
          <section className="content-card">
            <h2>Letters of Support</h2>
            <p>
              This section is ready for recommendation and support letters from peers and students. Add letter entries here once they are available.
            </p>
            <ul>
              <li>Peer letter placeholder</li>
              <li>Student letter placeholder</li>
            </ul>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
