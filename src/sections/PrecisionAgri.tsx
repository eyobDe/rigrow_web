import { useEffect, useRef } from 'react'
import { Scale, Gauge, Leaf, Sprout } from 'lucide-react'
import '../styles/precision-agri.css'

const solutions = [
  {
    id: 'equity',
    title: 'Equitable Water Plans',
    description: 'Rigrow balances water delivery across every block, matching crop stage, soil and capacity.',
    icon: Scale,
  },
  {
    id: 'efficiency',
    title: 'Precision Scheduling',
    description: '10m daily analytics guide application timing, eliminating waste and guesswork.',
    icon: Gauge,
  },
  {
    id: 'productivity',
    title: 'Field Productivity',
    description: 'Operators stay ahead of stress, keeping machines and crews focused on yield.',
    icon: Leaf,
  },
]

export function PrecisionAgriStory() {
  const sectionRef = useRef<HTMLElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const impactRef = useRef<HTMLDivElement>(null)
  const connectorsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = [solutionsRef.current, imageRef.current, impactRef.current, connectorsRef.current]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-inview', 'true')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    targets.forEach((target) => {
      if (target) observer.observe(target)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="precision-agri" ref={sectionRef} className="precision-agri">
      <div className="precision-agri__inner">
        <div className="precision-agri__header">
          <div className="precision-agri__badge">
            <span className="precision-agri__badge-dot" aria-hidden="true" />
            Precision Agriculture is Here
          </div>
          <h2 className="precision-agri__title">
            How Rigrow Empowers Farmers Through Precision Agriculture
          </h2>
          <p className="precision-agri__subtitle">
            From intelligent solutions to measurable field impact - one connected story of water, analytics, and people.
          </p>
        </div>

        <div className="precision-agri__story-canvas">
          {/* Left: Solutions */}
          <div
            ref={solutionsRef}
            className="precision-agri__solutions"
            data-inview="false"
          >
            <span className="precision-agri__label">Rigrow Solutions</span>
            <div className="precision-agri__solutions-list">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon
                return (
                  <div
                    key={solution.id}
                    className="precision-agri__solution-card"
                    style={{ '--card-index': idx } as React.CSSProperties}
                  >
                    <div className="precision-agri__solution-icon">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className="precision-agri__solution-content">
                      <h3 className="precision-agri__solution-title">{solution.title}</h3>
                      <p className="precision-agri__solution-desc">{solution.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Mobile arrow */}
            <svg className="precision-agri__mobile-arrow" viewBox="0 0 160 60" aria-hidden="true">
              <defs>
                <marker id="mobile-arrow-1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M1 1 L7 4 L1 7 Z" fill="rgba(96, 205, 148, 0.85)" />
                </marker>
              </defs>
              <path
                d="M20 15 Q 80 40, 140 15"
                fill="none"
                stroke="rgba(96, 205, 148, 0.7)"
                strokeWidth="2.5"
                strokeDasharray="4 8"
                markerEnd="url(#mobile-arrow-1)"
              />
            </svg>
          </div>

          {/* Center: Image */}
          <div
            ref={imageRef}
            className="precision-agri__center"
            data-inview="false"
          >
            <div className="precision-agri__image-wrapper">
              <img
                src="/branding/assets/farmers.png"
                alt="Rigrow agronomists working with farmers in the field"
                className="precision-agri__image"
              />
              <div className="precision-agri__image-glow" aria-hidden="true" />
            </div>
            <p className="precision-agri__caption">
              Rigrow connects analytics, water, and people - enabling measurable field impact.
            </p>
            {/* Mobile arrow */}
            <svg className="precision-agri__mobile-arrow" viewBox="0 0 160 60" aria-hidden="true">
              <defs>
                <marker id="mobile-arrow-2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M1 1 L7 4 L1 7 Z" fill="rgba(255, 196, 94, 0.85)" />
                </marker>
              </defs>
              <path
                d="M20 45 Q 80 20, 140 45"
                fill="none"
                stroke="rgba(255, 196, 94, 0.7)"
                strokeWidth="2.5"
                strokeDasharray="4 8"
                markerEnd="url(#mobile-arrow-2)"
              />
            </svg>
          </div>

          {/* Right: Impact */}
          <div
            ref={impactRef}
            className="precision-agri__impact"
            data-inview="false"
          >
            <span className="precision-agri__label">Field Impact</span>
            <div className="precision-agri__impact-card">
              <div className="precision-agri__impact-icon">
                <Sprout className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="precision-agri__impact-metric">100+</div>
              <div className="precision-agri__impact-label">Fields Managed</div>
              <p className="precision-agri__impact-text">
                Precision irrigation programs active across Ethiopia, delivering measurable outcomes in water efficiency, crop vitality, and farmer confidence.
              </p>
            </div>
          </div>

          {/* Desktop Connector Arrow */}
          <div ref={connectorsRef} className="precision-agri__connector" data-inview="false" aria-hidden="true">
            <svg viewBox="0 0 1000 300" className="precision-agri__connector-svg">
              <defs>
                <linearGradient id="story-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(96, 205, 148, 0.85)" />
                  <stop offset="50%" stopColor="rgba(127, 210, 162, 0.7)" />
                  <stop offset="100%" stopColor="rgba(255, 196, 94, 0.8)" />
                </linearGradient>
                <marker id="arrow-mid" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
                  <circle cx="6" cy="6" r="4" fill="rgba(127, 210, 162, 0.9)" />
                </marker>
                <marker id="arrow-end" markerWidth="14" markerHeight="14" refX="7" refY="7" orient="auto">
                  <path d="M2 2 L12 7 L2 12 Z" fill="rgba(255, 214, 120, 0.95)" />
                </marker>
              </defs>
              <path
                className="precision-agri__connector-path"
                d="M 80 240 Q 320 290, 520 255 Q 760 230, 920 275"
                fill="none"
                stroke="url(#story-gradient)"
                strokeWidth="3.5"
                strokeDasharray="6 12"
                strokeLinecap="round"
                markerMid="url(#arrow-mid)"
                markerEnd="url(#arrow-end)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrecisionAgriStory
