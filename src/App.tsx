/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Bot,
  Cloud,
  BookOpen,
  Clock,
  MapPin,
  Calendar,
  AlertCircle,
  Award,
  Briefcase,
  Laptop,
  Users,
  Monitor,
  Coins,
  Compass,
  GraduationCap,
  Building2,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Send,
  Phone,
  Building,
  Target,
  ArrowRight,
  ExternalLink,
  Layers,
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  User,
  CreditCard,
  MessageSquare
} from 'lucide-react';

interface CourseStep {
  step: string;
  level: string;
  theme: 'slate' | 'indigo' | 'blue';
  items: string[];
}

interface CourseTrack {
  id: string;
  trackCode: string;
  name: string;
  desc: string;
  title: string;
  tags: string[];
  goal: string;
  steps: CourseStep[];
  projectTitle: string;
  projectDesc: string;
  careers: string[];
  detailUrl: string;
}

const coursesData: CourseTrack[] = [
  {
    id: 'agent',
    trackCode: 'TRACK 01',
    name: 'AI 에이전트',
    desc: '엔지니어 양성과정',
    title: 'Track 1. AI 에이전트 엔지니어 양성과정',
    tags: ['LLM', 'RAG', 'AI Agent', 'Cloud Native'],
    goal: 'LLM API와 RAG 기술을 서비스 로직에 결합하여 실전형 AI 에이전트 및 서비스를 개발할 수 있는 사용자 중심의 AI 애플리케이션 개발자를 양성합니다.',
    steps: [
      {
        step: 'STEP 1',
        level: '기본',
        theme: 'slate',
        items: [
          '생성형 AI & 바이브 코딩 입문 (AIR Studio)',
          'Python · FastAPI 서버 구축 기초',
          'Vector Store · 문서 청킹·임베딩'
        ]
      },
      {
        step: 'STEP 2',
        level: '심화',
        theme: 'indigo',
        items: [
          '커서 AI 활용 MVP 프로토타이핑',
          '하이브리드 검색 · Reranking 최적화',
          'LangChain · Tool Calling 제어'
        ]
      },
      {
        step: 'STEP 3',
        level: '전문',
        theme: 'blue',
        items: [
          'AI 에이전트 풀스택 웹 개발',
          'LangGraph 복합 상태 제어 · ReAct',
          '멀티 에이전트 협업 · K8s 배포'
        ]
      }
    ],
    projectTitle: 'Vibe Coding MVP 서비스 개발 · 기업용 AI 에이전트 플랫폼 구축',
    projectDesc: '(업무 자동화 비서, 고객 지원 티켓 자동 응대, 채용 서류 검토 에이전트) — 실제 동작하는 에이전트 포트폴리오 완성이 목표입니다.',
    careers: ['#AI 엔지니어', '#주니어 ML 엔지니어', '#LLM 애플리케이션 엔지니어', '#RAG·Agentic AI 엔지니어', '#AI 응용 서비스 개발자'],
    detailUrl: 'https://megazone-ai-01.vercel.app'
  },
  {
    id: 'architect',
    trackCode: 'TRACK 02',
    name: 'AI 아키텍트',
    desc: '하이브리드 클라우드 기반 엔지니어 양성과정',
    title: 'Track 2. 하이브리드 클라우드 기반 AI 아키텍트 엔지니어 양성과정',
    tags: ['Linux', 'Kubernetes', 'AWS', 'Terraform', 'MLOps'],
    goal: '비전공자 및 초급자를 대상으로 리눅스 기초부터 생성형 AI 서비스 운영까지 아우르는 AI 인프라 전문가를 양성합니다. GPU 기반 컨테이너 환경 구축, 벡터 DB 및 AWS 클라우드 아키텍처 설계, 인프라 자동화(IaC) 실습을 통해 실무에 즉시 적용 가능한 MLOps 핵심 역량을 습득합니다.',
    steps: [
      {
        step: 'STEP 1',
        level: '기본',
        theme: 'slate',
        items: [
          'TCP/IP · 네트워크 경계 설계',
          '리눅스 시스템 · 쉘 스크립트 자동화',
          'Conda · Python LLM 서빙 기초'
        ]
      },
      {
        step: 'STEP 2',
        level: '심화',
        theme: 'indigo',
        items: [
          'Docker 이미지 최적화 · 리소스 격리',
          'Kubernetes 클러스터 · GPU 스케줄링',
          'AWS VPC · EC2·S3 아키텍처'
        ]
      },
      {
        step: 'STEP 3',
        level: '전문',
        theme: 'blue',
        items: [
          'KubeFlow 기반 MLOps 파이프라인',
          'Terraform 기반 IaC 자동화',
          'GitLab CI/CD · 모니터링 통합'
        ]
      }
    ],
    projectTitle: 'AI Cloud Project',
    projectDesc: ' — 금융·공공 기관용 폐쇄형 AI 검색 시스템, 대규모 트래픽 대응 AI 추천 시스템, 스마트 팩토리 예지보전 모니터링, SaaS형 AI 문서 요약·번역 플랫폼 중 팀별 선택 구축.',
    careers: ['#클라우드 엔지니어', '#AI 인프라 엔지니어', '#MLOps 엔지니어', '#DevOps 엔지니어', '#주니어 솔루션 아키텍트'],
    detailUrl: 'https://megazone-ai-02.vercel.app'
  },
  {
    id: 'security',
    trackCode: 'TRACK 03',
    name: 'AI 보안',
    desc: '하이브리드 클라우드 기반 엔지니어 양성과정',
    title: 'Track 3. 하이브리드 클라우드 기반 AI 보안 엔지니어 양성과정',
    tags: ['ZTNA', 'AI-SOAR', 'LLM Security', 'Cloud Defense'],
    goal: 'AI 리터러시를 선행하여 비전공자도 보안 스크립트를 개발할 수 있는 역량을 기르고, 온프레미스 폐쇄망 보안(Private AI Security)과 하이브리드 클라우드 보안, AI-SOAR 자동화 관제 기술을 습득시켜 실전형 AI 보안 엔지니어 및 클라우드 보안 아키텍트를 양성합니다.',
    steps: [
      {
        step: 'STEP 1',
        level: '기본',
        theme: 'slate',
        items: [
          'Cisco 3계층 설계 · VPN 터널링',
          'Nmap · Wireshark 취약점 분석',
          'AWS VPC 보안 그룹 · 가상 인프라'
        ]
      },
      {
        step: 'STEP 2',
        level: '심화',
        theme: 'indigo',
        items: [
          'NGFW 정책 · 지능형 위협 차단',
          'ELK 기반 SIEM 관제 · 이상 탐지',
          'Transit Gateway · ZTNA 구현'
        ]
      },
      {
        step: 'STEP 3',
        level: '전문',
        theme: 'blue',
        items: [
          'OWASP LLM Top 10 · 가드레일 설계',
          'RAG 데이터 오염 방지 · 벡터 DB 암호화',
          'GuardDuty 연동 · AI-SOAR 구축'
        ]
      }
    ],
    projectTitle: 'Secure Cloud & AI Project',
    projectDesc: ' — ZTNA 기반 하이브리드 보안 네트워크 구축, Secure RAG 사내 지식 검색 봇, LLM 가드레일·환각 제어 거버넌스, AI-SOAR 기반 지능형 보안 관제 자동화.',
    careers: ['#보안 엔지니어', '#클라우드 보안 엔지니어', '#보안 관제(SOC) 전문가', '#주니어 AI 보안 아키텍트'],
    detailUrl: 'https://megazone-ai-03.vercel.app'
  },
  {
    id: 'data',
    trackCode: 'TRACK 04',
    name: 'AI 데이터',
    desc: '하이브리드 클라우드 기반 엔지니어 양성과정',
    title: 'Track 4. 하이브리드 클라우드 기반 AI 데이터 엔지니어 양성과정',
    tags: ['SQL', 'Spark', 'Kafka', 'Airflow', 'Data Pipeline'],
    goal: 'SQL·Spark·Kafka·Airflow 기반 End-to-End 데이터 파이프라인을 다루는 데이터 엔지니어로 성장합니다. 대규모 데이터의 수집, 처리, 저장부터 AI 모델 학습을 위한 데이터 제공까지 전체 흐름을 자동화하고 최적화하는 역량을 습득합니다.',
    steps: [
      {
        step: 'STEP 1',
        level: '기본',
        theme: 'slate',
        items: [
          'SQL 심화 · RDBMS 데이터 모델링',
          'Python 데이터 전처리 (Pandas, NumPy)',
          'AWS S3 · 클라우드 데이터 스토리지 기초'
        ]
      },
      {
        step: 'STEP 2',
        level: '심화',
        theme: 'indigo',
        items: [
          'Hadoop 에코시스템 · Spark 분산 처리',
          'Kafka 실시간 스트리밍 데이터 수집',
          'Data Warehouse (AWS Redshift) 구축'
        ]
      },
      {
        step: 'STEP 3',
        level: '전문',
        theme: 'blue',
        items: [
          'Airflow 워크플로우 스케줄링·자동화',
          '데이터 파이프라인 CI/CD 통합',
          'AI 모델 학습용 Feature Store 연동'
        ]
      }
    ],
    projectTitle: 'Data Pipeline Project',
    projectDesc: ' — E-commerce 실시간 로그 분석 파이프라인, 금융 이상 거래 탐지(FDS) 스트리밍 처리, LLM 학습을 위한 대규모 말뭉치(Corpus) 전처리 및 벡터화 파이프라인 구축.',
    careers: ['#데이터 엔지니어', '#빅데이터 플랫폼 엔지니어', '#클라우드 데이터 엔지니어', '#데이터 아키텍트'],
    detailUrl: 'https://megazone-ai-04.vercel.app'
  }
];

const faqList = [
  {
    q: '비전공자인데 수강할 수 있나요?',
    a: '네. 학력·전공 무관하며, 모든 과정이 공통 AI 기초부터 시작해 단계별로 심화됩니다. 다만 IT 기초 역량(기본적인 컴퓨터 활용, 학습 의지)이 있다면 훨씬 수월하게 따라올 수 있습니다.'
  },
  {
    q: '교육비가 정말 0원인가요?',
    a: '네. 고용노동부 K-디지털 트레이닝(KDT) 과정으로 국민내일배움카드를 발급받으면 수강료가 100% 국비 지원됩니다. 여기에 출석률 80% 충족 시 매월 최대 40만 원의 훈련장려금이 별도로 지급됩니다.'
  },
  {
    q: '국민내일배움카드는 어떻게 발급받나요?',
    a: '고용24(www.work24.go.kr) 또는 가까운 고용센터에서 신청할 수 있으며, 발급까지 통상 1~2주가 소요됩니다. 문의는 고용노동부 상담센터 1350으로 연락하시면 됩니다.'
  },
  {
    q: '장비나 실습 환경은 제공되나요?',
    a: '네. 1인 1노트북과 전 좌석 확장 모니터가 제공되며, 고성능 서버·클라우드 인프라(AWS 등)와 최신 AI 솔루션 실습 환경을 무상으로 지원합니다.'
  },
  {
    q: '취업 연계는 어떻게 이루어지나요?',
    a: '취업특강 → 1:1 이력서·자소서 코칭 → 1:1 모의면접의 단계별 취업지원과 함께, 우수 훈련생 인증 시 MEGAZONE TECH BRIDGE PROGRAM을 통해 메가존 그룹 및 파트너사 인턴·채용 우선 기회가 제공됩니다. 수료 후에도 180일간 사후 관리가 이어집니다.'
  },
  {
    q: '여러 과정을 동시에 신청할 수 있나요?',
    a: '최종 입과는 1개 과정만 가능합니다. 신청 단계에서 관심 과정을 남겨 주시면 상담을 통해 본인에게 가장 잘 맞는 과정을 함께 찾아드립니다.'
  },
  {
    q: '사전신청을 했는데, 정식 신청을 다시 해야 하나요?',
    a: '네. 사전신청은 모집 소식을 우선 안내드리기 위한 절차였으며, 입과 심사를 위해서는 과정별 정식 신청서를 제출해 주셔야 합니다. 사전신청자분들께는 정식 신청 방법을 별도로 안내드립니다.'
  }
];

const gwacheonImages = [
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjg5/MDAxNzg3MTg3NzQ5NDYy.aYguuDJVlzdi4ShU-AoVP2aX4ianE_HrV8jsUlUwS3cg.ov-LuLqPI4KAe5dG0nxrCDpYOiOeuOQf-1xjzoz8GWsg.JPEG/KakaoTalk_20260819_191135989_20.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTI1/MDAxNzg3MTg3NzQ5NTM3.8Ow0fR29b5VVFEBO9oSlv9jc0pTFE5RNBzVv-qxS3hgg.345JJB8Z1JwoB3Kgcgc2AmSyEXBzwPLsiJCGG1wjxiMg.JPEG/KakaoTalk_20260819_191135989_21.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTg5/MDAxNzg3MTg3NzQ2Nzg1.kzaCx6TA6r7VQor5wMe565EzE7yqqyRmj0f6EGFrCwAg.AMWSBXt5AyaUyiZkK8IE9SrniPpJ3LjjEpPoSmZaHGog.JPEG/KakaoTalk_20260819_191135989_15.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTM4/MDAxNzg3MTg3NzQ2OTcw.xRUoNVgFdTks8jl-bAxm9Gm919-7JYtNzdFgkLg7lY8g.h3XpSUSV_Odmntoc0lGfsbG3GLSb4QFd3w_SvNcBX20g.JPEG/KakaoTalk_20260819_191135989_16.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMyAg/MDAxNzg3MTg3NzQ3MDUz.ce9GHg0-SM-a0lqk-ueI76u1L8teqXj-MDR2mn_PBmEg._YfW_BWQzCMDzlx1KHrT8lwDoF7_02ocN1uHX0lP65Ug.JPEG/KakaoTalk_20260819_191135989_18.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfOTMg/MDAxNzg3MTg3NzQ3MDM4.TZTGW0Q_YeiYyQWHQ5M3VwyLby2wFftm5PG3dIEdaEEg.cBqE6v5SzgI0oa9dcYL4u9SB-M6My5LdELEb99VH5Ncg.JPEG/KakaoTalk_20260819_191135989_17.jpg?type=w966"
];

const yeoksamImages = [
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjY0/MDAxNzg3MTg3NzQ1ODk0.CM9g9N3rx_yedA9vWqHIO_ve15SqVgM5I37Qjy6mb90g.UTiz6496GI9uElhIg2WtlDSvR0UYEnsfKzsgFZtKR3Mg.JPEG/KakaoTalk_20260819_191135989.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTc5/MDAxNzg3MTg3NzQ4MjY4.9GTLNBMiVMY-oG-yzKf2mEYowPaI1xIRCeZIk9MLFMcg.UIT7AzlYNpxugUsmW61ud018NSoHqMfFoeRxxIGWJ3cg.JPEG/KakaoTalk_20260819_191135989_02.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjcy/MDAxNzg3MTg3NzQ4MzU2.JsRSmoSkCCfeeFI7G6PLWngXTJTePT4UMv_f4JYd6vMg.8YVJVD5kBE-UKJxE13pT0yNxOexvdKacvUpTP8LFcLEg.JPEG/KakaoTalk_20260819_191135989_03.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTU2/MDAxNzg3MTg3NzQ4NDI3.HIYw-up2DQTQfiNy5llQxzlBvWsvYBYxD0Y9J1HHZJYg.erakYftx1txaHsdIjlkPvnsto6OvyzuiEdrmb8wl0ccg.JPEG/KakaoTalk_20260819_191135989_04.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTUx/MDAxNzg3MTg3NzQ4OTMx.49PwR_8Vg9RNQJvrxLGNnJAEq_OkDZ_U_3jKcbSr2f4g.2ZlnFBof1DLWbsGtMITmETVjHecyRcAPr1i4eqq8Skgg.JPEG/KakaoTalk_20260819_191135989_05.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjMy/MDAxNzg3MTg3NzQ3MjMw.0Sb0sKoplBTSyDTMDiK2HFZKZuCgFO-eTg1gNswyxPsg.BqKn25a0AnuiJsRRUxhP-oYY-komtWfJ2_CPFY1-Tt4g.JPEG/KakaoTalk_20260819_191135989_07.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTAg/MDAxNzg3MTg3NzQ3ODYz.rhAha0FpDpUCnKBu7ao4wlTKPFLMNxsGDJpoOYIMa4kg.A0T1qyCedZE52hE3CsCTi9BUZ7m8FWI0NvyRpOonbp8g.JPEG/KakaoTalk_20260819_191135989_08.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMSAg/MDAxNzg3MTg3NzQ4MTcw.WNTvLRW69KmwEYSxzj_hPcw5peM3OOl5_od-CWLSbZgg.Sl6psbHWd7tnphFYGGWbqprzuvEudE0lfFZCOgwTNJsg.JPEG/KakaoTalk_20260819_191135989_09.jpg?type=w966"
];

const fallbackCampusImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
];

interface CampusSliderProps {
  images: string[];
  altPrefix: string;
  tags: string[];
}

const CampusSlider: React.FC<CampusSliderProps> = ({ images, altPrefix, tags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imgSources, setImgSources] = useState(() =>
    images.map(img => `https://wsrv.nl/?url=${encodeURIComponent(img)}`)
  );

  const handleImageError = (idx: number) => {
    setImgSources(prev => {
      const next = [...prev];
      if (next[idx].startsWith('https://wsrv.nl/')) {
        next[idx] = images[idx];
      } else {
        next[idx] = fallbackCampusImages[idx % fallbackCampusImages.length];
      }
      return next;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <div
      className="campus-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Track Tags */}
      <div className="campus-slider-tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="campus-tag-badge">
            {tag}
          </span>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="campus-slider-counter">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Images */}
      <div className="campus-slider-media">
        {images.map((_, idx) => (
          <img
            key={idx}
            src={imgSources[idx]}
            alt={`${altPrefix} 사진 ${idx + 1}`}
            referrerPolicy="no-referrer"
            className={`campus-slide-img ${idx === currentIndex ? 'active' : ''}`}
            onError={() => handleImageError(idx)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        className="campus-slider-arrow left"
        aria-label="이전 사진"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="campus-slider-arrow right"
        aria-label="다음 사진"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots Indicator */}
      <div className="campus-slider-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`campus-slider-dot ${idx === currentIndex ? 'active' : ''}`}
            aria-label={`${idx + 1}번 사진으로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('agent');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [partnerCertTab, setPartnerCertTab] = useState<'AWS' | 'MS' | 'GCP' | 'ISV'>('AWS');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    track: '메가존 AI에이전트',
    content: '',
    agree: true
  });
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll Reveal IntersectionObserver
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [selectedCourseId, partnerCertTab]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.phone || !formData.track) {
      alert('필수 항목(이름, 나이, 연락처, 과정명)을 모두 입력해주세요.');
      return;
    }

    const currentData = { ...formData };

    // 1. Optimistic UI: Immediately show completion message (0.1s feeling) without waiting for server response
    setSubmittedMessage(
      `상담 신청이 완료되었습니다!\n\n[${currentData.name}님 지원 신청 접수]\n희망 과정: ${currentData.track}\n연락처: ${currentData.phone}\n\n담당 전문 매니저가 1영업일 이내에 연락드려 국비지원 입과 상담을 도와드립니다.`
    );

    // Reset form inputs immediately
    setFormData({
      name: '',
      age: '',
      phone: '',
      track: '메가존 AI에이전트',
      content: '',
      agree: true
    });

    // 2. Background transmission with keepalive: true to https://inputhaven.com/api/v1/submit
    try {
      const payload = new FormData();
      payload.append('', 'e0753dd0894eeda822c09200b6c34a1e');
      payload.append('name', currentData.name);
      payload.append('age', currentData.age);
      payload.append('phone', currentData.phone);
      payload.append('course', currentData.track);
      payload.append('message', currentData.content || '');

      fetch('https://inputhaven.com/api/v1/submit', {
        method: 'POST',
        body: payload,
        keepalive: true,
      }).catch((err) => console.log('Background form submission dispatched:', err));
    } catch (err) {
      console.log('Background submission error:', err);
    }
  };

  const currentCourse = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  const getTabIcon = (tabKey: string) => {
    switch (tabKey) {
      case 'agent':
        return '🤖';
      case 'architect':
        return '☁️';
      case 'security':
        return '🛡️';
      case 'data':
        return '📊';
      case 'roadmap':
        return '🗺️';
      case 'cert':
        return '📜';
      default:
        return '✨';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} id="progressBar" />

      {/* Header */}
      <header className="header" id="header">
        <div className="header-inner">
          <div className="header-left">
            <a href="#hero" className="logo-wrap" id="headerLogoLink">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA4MjRfMTI1/MDAxNzg3NTM3NDEyNTY1.WG7wkREkwquB6If3kCAPJA6d73meDHQDxPmKvqMkAcYg.Um18Qeximx5gynA2BsNy3hywDKNxVqzwyG0MUl4kU5Ug.PNG/%EB%A1%9C%EA%B3%A0.png?type=w966"
                alt="MEGAZONE CLOUD 메가존클라우드 로고"
                className="logo-img"
                referrerPolicy="no-referrer"
              />
            </a>
            <nav className="gnb-nav">
              <a href="https://megazone-ai-01.vercel.app">AI 에이전트</a>
              <a href="https://megazone-ai-02.vercel.app">AI 아키텍트</a>
              <a href="https://megazone-ai-03.vercel.app">AI 보안</a>
              <a href="https://megazone-ai-04.vercel.app">AI 데이터</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
          <div className="header-right">
            <a href="#apply" className="btn-primary-pill" id="headerApplyBtn">
              무료 상담 신청 ↗
            </a>
            <button
              className="mobile-menu-btn"
              id="mobileMenuBtn"
              aria-label="메뉴 열기"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} id="mobileDrawer">
          <a href="https://megazone-ai-01.vercel.app" onClick={() => setMobileMenuOpen(false)}>AI 에이전트</a>
          <a href="https://megazone-ai-02.vercel.app" onClick={() => setMobileMenuOpen(false)}>AI 아키텍트</a>
          <a href="https://megazone-ai-03.vercel.app" onClick={() => setMobileMenuOpen(false)}>AI 보안</a>
          <a href="https://megazone-ai-04.vercel.app" onClick={() => setMobileMenuOpen(false)}>AI 데이터</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a
            href="#apply"
            className="btn-primary-pill"
            style={{ textAlign: 'center', justifyContent: 'center' }}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const target = document.getElementById('apply');
              if (target) {
                if (window.innerWidth < 768) {
                  const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition + 320;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                } else {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
                setTimeout(() => {
                  const nameInput = document.getElementById('userName');
                  if (nameInput) nameInput.focus({ preventScroll: true });
                }, 400);
              }
            }}
          >
            무료 상담 신청
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>AI Campus · K-Digital Training · 고용노동부 국비지원</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-prefix">2026 메가존클라우드</span> <br />
            <span className="highlight-cyan">AI-Native 부트캠프</span>
          </h1>
          <p className="hero-desc">
            AI로 ‘내 일’을 바꾸고, AI로 ‘내일’을 바꾸다.<br />
            전공 무관 · 교육비 0원 — 기업이 원하는 AI 엔지니어로, 6개월 만에
          </p>
          <div className="hero-cta-group">
            <a
              href="#curriculum"
              className="btn-pill-white"
              id="heroTrackBtn"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('curriculum');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              과정 자세히 보기
            </a>
            <a
              href="#apply"
              className="btn-pill-gradient"
              id="heroApplyBtn"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('apply');
                if (target) {
                  if (window.innerWidth < 768) {
                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition + 320;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                  setTimeout(() => {
                    const nameInput = document.getElementById('userName');
                    if (nameInput) nameInput.focus({ preventScroll: true });
                  }, 400);
                }
              }}
            >
              무료 상담 신청하기 ➔
            </a>
          </div>

          {/* Hero Visual 3D Graphic */}
          <div className="hero-visual">
            <div className="cube-icon-left float-anim-1">
              <Bot style={{ width: '28px', height: '28px', color: '#00d2ff' }} />
            </div>
            <div className="main-graphic-wrap">
              <img
                src="https://postfiles.pstatic.net/MjAyNjA4MTlfMjc4/MDAxNzg3MTI0NTY1MjAx.MEX2ZlXFDgltnB7dORzlJxH_BLBvh_UjqcpuzD-FcyYg.8Oc3vj2OhcQOBrJO027j9EspLD-chEOMmXxhXvR-6msg.PNG/%EB%A9%94%EA%B0%80%EC%A1%B4_%EB%B0%B0%EA%B2%BD%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%A0%9C%EA%B1%B0-Photoroom.png?type=w966"
                alt="Megazone AI Graphic"
                className="hero-center-img"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="cube-icon-right float-anim-2">
              <Cloud style={{ width: '28px', height: '28px', color: '#3b82f6' }} />
            </div>
          </div>

          {/* Key Course Info Box */}
          <div className="hero-summary-box">
            <div className="summary-grid">
              <div className="summary-item">
                <span className="sum-label">
                  <BookOpen className="icon-inline text-cyan" /> 수강 과정
                </span>
                <strong className="sum-val">AI 에이전트 · AI 아키텍트 · AI 보안 · AI 데이터 4개 과정</strong>
              </div>
              <div className="summary-item">
                <span className="sum-label">
                  <Clock className="icon-inline text-amber" /> 교육 기간
                </span>
                <strong className="sum-val">984시간 · 약 6개월 (전 과정 공통 · 평일 09:00~18:00)</strong>
              </div>
              <div className="summary-item">
                <span className="sum-label">
                  <MapPin className="icon-inline text-blue" /> 교육 장소
                </span>
                <strong className="sum-val">과천 캠퍼스 에이전트·아키텍트 / 역삼 캠퍼스 보안·데이터</strong>
              </div>
              <div className="summary-item">
                <span className="sum-label">
                  <Calendar className="icon-inline text-purple" /> 모집 기간
                </span>
                <strong className="sum-val">모집 중 · 2026년 9월 중 개강(과정별 상이)</strong>
              </div>
            </div>
            <div className="summary-note">
              <AlertCircle className="icon-inline text-cyan" />
              <span>※ 개강 일정은 기관 내부 사정에 따라 일부 변동될 수 있습니다.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Benefits Section (수강생 전원 특별 혜택 - Why Section Style) */}
      <section className="section-special-benefits" id="solutions">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-subtitle">SPECIAL BENEFITS</span>
            <h2 className="section-title">수강생 전원 특별 혜택</h2>
            <p className="section-desc">메가존클라우드 AI 캠퍼스 훈련생만을 위해 준비된 5대 프리미엄 지원 혜택입니다.</p>
          </div>

          <div className="special-why-grid">
            {/* Benefit 1: 수강료 0원 + 훈련장려금 */}
            <div className="why-card reveal-item reveal-delay-1">
              <div className="why-icon-wrap" style={{ background: 'rgba(0, 100, 255, 0.1)', color: '#0064ff' }}>
                <Coins size={24} />
              </div>
              <h3>수강료 0원 +<br />
              매월 훈련장려금 지급</h3>
            </div>

            {/* Benefit 2: 최고 사양 인프라 */}
            <div className="why-card reveal-item reveal-delay-2">
              <div className="why-icon-wrap" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Monitor size={24} />
              </div>
              <h3>최고 사양 인프라<br />
              무상 지원</h3>
            </div>

            {/* Benefit 3: BEST 메가존 채용 연계 */}
            <div className="why-card special-best-card reveal-item reveal-delay-3">
              <div className="best-benefit-badge">BEST 혜택</div>
              <div className="why-icon-wrap" style={{ background: 'rgba(0, 100, 255, 0.18)', color: '#0064ff' }}>
                <Briefcase size={24} />
              </div>
              <h3 style={{ color: '#0064ff' }}>메가존클라우드<br /> 인턴십 &amp; 채용 연계</h3>
              
            </div>

            {/* Benefit 4: 현직 전문가 멘토링 */}
            <div className="why-card reveal-item reveal-delay-4">
              <div className="why-icon-wrap" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
                <Users size={24} />
              </div>
              <h3>현직 전문가의<br />
              1:1 밀착 멘토링</h3>
            </div>

            {/* Benefit 5: 공인 자격증 바우처 */}
            <div className="why-card reveal-item reveal-delay-5">
              <div className="why-icon-wrap" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                <Award size={24} />
              </div>
              <h3>AWS · GCP 공인 자격증<br />
              바우처 100% 제공</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Latest Tracks Grid */}
      <section className="section-tracks" id="tracks">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="section-subtitle">Problem & Why</span>
            <h2 className="section-title">왜 지금, AI 엔지니어인가</h2>
            <p className="section-desc">채용 시장의 기준이 바뀌고 있습니다. 지금 시작하는 사람이 그 기준을 먼저 충족합니다.</p>
          </div>

          <div className="track-cards-grid" id="trackCardsGrid">
            <div className="ncloud-card card-cyan reveal-item reveal-delay-1">
              <div>
                <div className="card-top">
                  <span className="card-badge">산업 트렌드</span>
                </div>
                <h3 className="card-title">전 산업의 AI 전환이 시작됐습니다</h3>
                <p className="card-text">
                  기업들이 전 직무에 생성형 AI를 도입하면서, 'AI를 활용하는 인력'을 넘어 'AI 서비스를 만들고 운영하는 인력'에 대한 수요가 빠르게 커지고 있습니다.
                </p>
              </div>
              <div className="card-footer">
                <span>AI 도입 기업 수 ↑ · AI 직무 채용 공고 ↑</span>
              </div>
            </div>

            <div className="ncloud-card card-navy reveal-item reveal-delay-2">
              <div>
                <div className="card-top">
                  <span className="card-badge">채용 기준의 변화</span>
                </div>
                <h3 className="card-title">IT 채용의 핵심 요구가 달라졌습니다</h3>
                <p className="card-text">
                  개발·인프라·보안·데이터 어떤 직무든, LLM 활용 경험과 클라우드 실무 역량이 채용 공고의 우대·필수 조건으로 이동하고 있습니다.
                </p>
              </div>
              <div className="card-footer">
                <span>LLM · 클라우드 경험 = 신입의 새 기본기</span>
              </div>
            </div>

            <div className="ncloud-card card-purple reveal-item reveal-delay-3">
              <div>
                <div className="card-top">
                  <span className="card-badge">지금이 적기</span>
                </div>
                <h3 className="card-title">기업은 '프로젝트 경험'을 봅니다</h3>
                <p className="card-text">
                  이론만 배운 지원자와 현업 연계 프로젝트를 완주한 지원자의 격차는 큽니다. 984시간 실전형 커리큘럼과 300시간+ 프로젝트로 그 격차를 만들어 드립니다.
                </p>
              </div>
              <div className="card-footer">
                <span>984시간 실전 커리큘럼 · 300시간+ 프로젝트</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1-2: Why Megazone */}
      <section className="section-why-megazone" id="why-megazone">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-subtitle">Why Megazone</span>
            <h2 className="section-title">메가존클라우드라서 가능한 것</h2>
            <p className="section-desc">교육기관이 아닌, 국내 1위 클라우드 기업이 직접 설계하고 가르치는 과정입니다.</p>
          </div>

          <div className="why-megazone-grid">
            {[
              {
                title: "국내 1위",
                sub: "MSP 메가존클라우드",
                desc: "클라우드 관리 서비스 국내 선두 기업이 커리큘럼 설계부터 멘토링까지 직접 참여합니다."
              },
              {
                title: "20+",
                sub: "메가존 그룹 자회사",
                desc: "그룹사·파트너 네트워크와 연계한 TECH BRIDGE 채용 프로그램을 운영합니다."
              },
              {
                title: "300명+",
                sub: "연간 신규 채용 규모",
                desc: "메가존 그룹의 채용 규모와 직결된 인턴십 · 채용 Pool에 우수 수료생을 등록합니다."
              },
              {
                title: "300시간+",
                sub: "실무 프로젝트",
                desc: "전체 984시간 중 300시간 이상을 현업 시나리오 기반 프로젝트에 투입합니다."
              }
            ].map((item, idx) => (
              <div key={idx} className={`why-megazone-card reveal-item reveal-delay-${idx + 1}`}>
                <div className="why-card-title">{item.title}</div>
                <div className="why-card-sub">{item.sub}</div>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="why-megazone-note reveal-item">
            ※ 수강생 수 · 취업률 · 만족도 등 성과 수치는 1기 운영 후 실측 데이터로 업데이트됩니다.
          </p>
        </div>
      </section>

      {/* Section 2: Service Curriculum Explorer (4 Courses) */}
      <section className="section-services" id="curriculum">
        <div className="container" id="courses">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-subtitle">4 Courses</span>
            <h2 className="section-title">
              지금 가장 주목받는 AI,<br /> 나에게 맞는 과정을 선택하세요
            </h2>
            <p className="section-desc">별도 페이지 이동 없이 4개 과정의 개요와 커리큘럼을 한곳에서 비교할 수 있습니다.</p>
          </div>

          {/* 4 Course Selection Buttons */}
          <div className="course-select-grid">
            {coursesData.map((course, idx) => (
              <button
                key={course.id}
                type="button"
                onClick={() => setSelectedCourseId(course.id)}
                className={`course-select-card reveal-item reveal-delay-${idx + 1} ${selectedCourseId === course.id ? 'active' : ''}`}
              >
                <span className="course-card-tag">TRACK 0{idx + 1}</span>
                <h3 className="course-card-name">{course.name}</h3>
                <p className="course-card-desc">{course.desc}</p>
              </button>
            ))}
          </div>

          {/* Course Detail Container */}
          <div className="course-detail-board reveal-item" key={currentCourse.id}>
            {/* Header & Badges */}
            <div className="course-detail-head">
              <div className="course-title-wrap">
                <h3 className="course-main-title">{currentCourse.title}</h3>
                <div className="course-tags-row">
                  {currentCourse.tags.map((tag) => (
                    <span key={tag} className="course-tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 교육 목표 */}
            <div className="course-goal-box">
              <h4 className="course-goal-title">
                <Target className="w-5 h-5 text-indigo-600" />
                교육 목표
              </h4>
              <p className="course-goal-desc">{currentCourse.goal}</p>
            </div>

            {/* 커리큘럼 한눈에 보기 */}
            <h4 className="course-steps-title">커리큘럼 한눈에 보기</h4>
            <div className="course-steps-grid">
              {currentCourse.steps.map((st, sIdx) => (
                <div key={sIdx} className={`course-step-card step-theme-${st.theme} ${sIdx === 1 ? 'step-offset-1' : sIdx === 2 ? 'step-offset-2' : ''}`}>
                  <div className="step-card-header">
                    <span className="step-badge">{st.step}</span>
                    <h5 className="step-level-name">{st.level}</h5>
                  </div>
                  <ul className="step-items-list">
                    {st.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <span className="step-bullet"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 대표 프로젝트 */}
            <div className="course-project-box">
              <h5 className="course-project-title">
                <FolderGit2 className="w-5 h-5 text-gray-500" />
                대표 프로젝트
              </h5>
              <p className="course-project-desc">
                <span className="project-highlight">{currentCourse.projectTitle}</span>
                {currentCourse.projectDesc}
              </p>
            </div>

            {/* 수료 후 취업 진출 분야 */}
            <div className="course-career-box">
              <h5 className="course-career-title">수료 후 취업 진출 분야</h5>
              <div className="course-career-tags">
                {currentCourse.careers.map((career) => (
                  <span key={career} className="career-pill">{career}</span>
                ))}
              </div>
            </div>

            {/* 액션 버튼 */}
            <div className="course-action-footer">
              <a href="#apply" className="btn-primary-apply">
                교육 신청하기
              </a>
              <a
                href={currentCourse.detailUrl}
                className="btn-detail-link"
              >
                과정 상세 보기 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Learning Journey (6-Months Step & Timeline) */}
      <section className="section-journey" id="journey">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">LEARNING JOURNEY</span>
            <h2 className="section-title">기초부터 취업까지, 현업형 실무 역량을 완성하는 6단계</h2>
            <p className="section-desc">모든 과정은 공통 AI 기초에서 출발해 현업 연계 프로젝트와 취업 지원으로 이어집니다.</p>
          </div>

          <div className="steps-grid">
            <div className="step-box-card reveal-item reveal-delay-1">
              <div className="step-num-bg">01</div>
              <span className="step-badge">STEP 1</span>
              <h4>공통 AI 기초</h4>
              <p>AI Foundation · Prompt Engineering 등 공통 기초를 다집니다.</p>
            </div>
            <div className="step-box-card reveal-item reveal-delay-2">
              <div className="step-num-bg">02</div>
              <span className="step-badge">STEP 2</span>
              <h4>바이브 코딩 & 미니 프로젝트</h4>
              <p>Vibe Coding으로 도구 활용을 익히고 미니 프로젝트를 수행합니다.</p>
            </div>
            <div className="step-box-card reveal-item reveal-delay-3">
              <div className="step-num-bg">03</div>
              <span className="step-badge">STEP 3</span>
              <h4>전공 심화 이론·실습</h4>
              <p>과정별 핵심 기술을 현업 수준까지 깊게 학습합니다.</p>
            </div>
            <div className="step-box-card reveal-item reveal-delay-4">
              <div className="step-num-bg">04</div>
              <span className="step-badge">STEP 4</span>
              <h4>실무 프로젝트</h4>
              <p>실제 비즈니스 시나리오로 팀 단위 프로젝트를 진행합니다.</p>
            </div>
            <div className="step-box-card reveal-item reveal-delay-5">
              <div className="step-num-bg">05</div>
              <span className="step-badge">STEP 5</span>
              <h4>현업 연계 프로젝트 & 품평회</h4>
              <p>기업 주제 종합 프로젝트와 품평회로 우수팀을 선정합니다.</p>
            </div>
            <div className="step-box-card reveal-item reveal-delay-6">
              <div className="step-num-bg">06</div>
              <span className="step-badge">STEP 6</span>
              <h4>취업 지원 & 채용 연계</h4>
              <p>포트폴리오·면접 대비로 취업까지 연결합니다.</p>
            </div>
          </div>

          {/* Timeline Banner */}
          <div className="timeline-banner reveal-item">
            <div className="timeline-item t-1">
              <div className="t-month">MONTH 1</div>
              <div className="t-title">공통 AI 기초 ·<br />바이브 코딩</div>
            </div>
            <div className="timeline-item t-2">
              <div className="t-month">MONTH 2–3</div>
              <div className="t-title">전공 심화<br />이론 · 실습</div>
            </div>
            <div className="timeline-item t-3">
              <div className="t-month">MONTH 4</div>
              <div className="t-title">실무 프로젝트<br />착수</div>
            </div>
            <div className="timeline-item t-4">
              <div className="t-month">MONTH 5</div>
              <div className="t-title">현업 연계 프로젝트<br />& 품평회</div>
            </div>
            <div className="timeline-item t-5">
              <div className="t-month">MONTH 6</div>
              <div className="t-title">수료 · 취업지원<br />채용 연계</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Global Partner Ecosystem */}
      <section className="section-partners" id="partners">
        <div className="container" style={{ textAlign: 'center' }}>
         <div className="reveal-item" style={{ marginBottom: '40px' }}>
          <span className="section-subtitle">Partners</span>
          <h2 className="section-title">글로벌 파트너 생태계 안에서 배웁니다</h2>
          <p className="section-desc mx-auto mb-10">
            국내 최초 AWS 공식 파트너 메가존클라우드 — 글로벌 CSP·솔루션 기업들과의 협업 생태계가<br className="hidden sm:inline" />
            교육 콘텐츠와 취업 연계의 든든한 기반이 됩니다.
          </p>
        </div>  

          {/* Partner Count Stats Pills */}
          <div className="partner-stats-row reveal-item">
            {[
              { label: 'CSP 파트너', count: '12+' },
              { label: 'AI · Data 파트너', count: '27+' },
              { label: '비즈니스 솔루션 파트너', count: '37+' },
              { label: '테크 파운데이션 파트너', count: '79+' },
              { label: 'ISV 파트너', count: '150+' }
            ].map((stat, idx) => (
              <div key={idx} className={`partner-stat-pill reveal-item reveal-delay-${idx + 1}`}>
                <span>{stat.label}</span>
                <span className="stat-pill-count">{stat.count}</span>
              </div>
            ))}
          </div>

          <div className="partner-blocks-wrap">
            {/* Block 1: CSP PARTNERS */}
            <div className="partner-block reveal-item">
              <div className="partner-block-head">
                <span className="block-head-badge">CSP PARTNERS</span>
                <span className="block-head-desc">글로벌 클라우드 리더들과의 전략적 협업</span>
              </div>
              <div className="csp-grid">
                {/* 1. AWS */}
                <div className="partner-card flex-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="relative flex flex-col items-center">
                        <span className="text-2xl font-black text-slate-800 tracking-tighter leading-none font-sans">aws</span>
                        <svg className="w-9 h-2.5 text-[#FF9900]" viewBox="0 0 50 15" fill="currentColor">
                          <path d="M 4 2 Q 25 14 46 2 L 44 0 Q 25 11 6 0 Z M 42 2 L 48 2 L 45 7 Z" />
                        </svg>
                      </div>
                      <div className="text-[10px] font-medium text-slate-600 leading-tight border-l border-slate-300 pl-2 text-left">
                        <div>partner</div>
                        <div>network</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-slate-500 tracking-tight">Training Partner</div>
                  </div>
                </div>

                {/* 2. Google Cloud */}
                <div className="partner-card flex-center">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                      <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                      <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                      <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                    </svg>
                    <div className="text-left leading-tight">
                      <div className="text-sm font-bold text-slate-800 tracking-tight">Google Cloud</div>
                      <div className="text-xs font-semibold text-slate-500">Partner</div>
                    </div>
                  </div>
                </div>

                {/* 3. Microsoft Azure */}
                <div className="partner-card flex-center">
                  <div className="flex items-center gap-2.5">
                    <div className="grid grid-cols-2 gap-0.5 w-5 h-5 flex-shrink-0">
                      <div className="bg-[#F25022] w-2.5 h-2.5"></div>
                      <div className="bg-[#7FBA00] w-2.5 h-2.5"></div>
                      <div className="bg-[#00A4EF] w-2.5 h-2.5"></div>
                      <div className="bg-[#FFB900] w-2.5 h-2.5"></div>
                    </div>
                    <span className="text-sm font-bold text-slate-800 tracking-tight">Microsoft Azure</span>
                  </div>
                </div>

                {/* 4. Oracle */}
                <div className="partner-card flex-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-lg font-black text-[#F80000] tracking-widest leading-none font-serif">ORACLE</div>
                    <div className="text-[11px] font-semibold text-slate-800 tracking-tight mt-1">Cloud Infrastructure</div>
                  </div>
                </div>

                {/* 5. Megazone K-Cloud */}
                <div className="partner-card flex-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-[10px] font-extrabold text-slate-900 tracking-widest uppercase mb-0.5">MEGAZONE</div>
                    <div className="text-lg font-black text-slate-900 tracking-tight leading-none">K·CLOUD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: CERTIFICATIONS */}
            <div className="partner-block reveal-item">
              <div className="partner-block-head">
                <span className="block-head-badge">CERTIFICATIONS</span>
                <span className="block-head-desc">글로벌 CSP · 솔루션 기업이 공식 인증한 전문 역량</span>
              </div>

              {/* Tabs Switcher */}
              <div className="cert-tab-switch-wrap">
                <div className="cert-tab-pill-box">
                  {(['AWS', 'MS', 'GCP', 'ISV'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setPartnerCertTab(tab)}
                      className={`cert-tab-btn ${partnerCertTab === tab ? 'active' : ''}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cert Grid */}
              <div className={`cert-grid ${partnerCertTab === 'MS' || partnerCertTab === 'GCP' ? 'grid-5-cols' : 'grid-6-cols'}`}>
                {/* AWS Tab Items */}
                {partnerCertTab === 'AWS' &&
                  [
                    { line1: 'Amazon Redshift', line2: 'Delivery' },
                    { line1: 'AI Services', line2: 'Competency' },
                    { line1: 'Managed Service', line2: 'Provider' },
                    { line1: 'Public Sector', line2: 'Solution Provider' },
                    { line1: 'Well-Architected', line2: 'Partner Program' },
                    { line1: 'SAP Services', line2: 'Competency' }
                  ].map((cert, cIdx) => (
                    <div key={cIdx} className="cert-card-box flex-center">
                      <svg viewBox="0 0 100 115" className="w-20 h-24">
                        <path d="M 5 5 L 75 5 L 95 25 L 95 110 L 5 110 Z" fill="none" stroke="#232F3E" strokeWidth="3.5" strokeLinejoin="miter" />
                        <text x="50" y="28" textAnchor="middle" fill="#232F3E" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">aws</text>
                        <path d="M 32 32 Q 50 39 68 32" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M 65 30 L 70 32 L 67 36 Z" fill="#FF9900" />
                        <text x="50" y="52" textAnchor="middle" fill="#232F3E" fontSize="9.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">PARTNER</text>
                        <text x="50" y="72" textAnchor="middle" fill="#232F3E" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{cert.line1}</text>
                        {cert.line2 && (
                          <text x="50" y="83" textAnchor="middle" fill="#232F3E" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{cert.line2}</text>
                        )}
                      </svg>
                    </div>
                  ))}

                {/* MS Tab Items */}
                {partnerCertTab === 'MS' &&
                  [
                    { line1: 'Data & AI', line2: 'Azure' },
                    { line1: 'Digital & App Innovation', line2: 'Azure' },
                    { line1: 'Infrastructure', line2: 'Azure' },
                    { line1: 'Modern Work', line2: '' },
                    { line1: 'Security', line2: '' }
                  ].map((ms, mIdx) => (
                    <div key={mIdx} className="cert-card-box flex flex-col justify-between p-5 text-left">
                      <div className="flex items-center gap-2 mt-1">
                        <div className="grid grid-cols-2 gap-[1.5px] w-4 h-4 flex-shrink-0">
                          <div className="bg-[#F25022] w-full h-full"></div>
                          <div className="bg-[#7FBA00] w-full h-full"></div>
                          <div className="bg-[#00A4EF] w-full h-full"></div>
                          <div className="bg-[#FFB900] w-full h-full"></div>
                        </div>
                        <div className="leading-tight text-left">
                          <div className="text-[13px] font-bold text-[#5E5E5E] tracking-tight font-sans">Microsoft</div>
                          <div className="text-[10px] font-medium text-[#737373] tracking-tight -mt-0.5">Solutions Partner</div>
                        </div>
                      </div>
                      <div className="text-[13px] font-semibold text-[#616161] leading-snug text-left mb-1">
                        <div>{ms.line1}</div>
                        {ms.line2 && <div>{ms.line2}</div>}
                      </div>
                    </div>
                  ))}

                {/* GCP Tab Items */}
                {partnerCertTab === 'GCP' && (
                  <>
                    <div className="cert-card-box flex flex-col items-center justify-center text-center p-5">
                      <div className="flex flex-col items-center justify-center my-auto">
                        <svg className="w-10 h-10 mb-1.5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                          <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                          <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                        </svg>
                        <div className="text-xs font-semibold text-[#757575]">Google Cloud</div>
                        <div className="text-sm font-bold text-[#424242]">Partner</div>
                      </div>
                    </div>

                    <div className="cert-card-box flex flex-col items-center justify-between text-center p-4">
                      <div className="flex flex-col items-center pt-1">
                        <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                          <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                          <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                        </svg>
                        <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SPECIALIZATION</div>
                        <div className="text-sm font-bold text-[#3C4043] mt-1.5">Infrastructure</div>
                      </div>
                      <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                    </div>

                    <div className="cert-card-box flex flex-col items-center justify-between text-center p-4">
                      <div className="flex flex-col items-center pt-1">
                        <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                          <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                          <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                        </svg>
                        <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SPECIALIZATION</div>
                        <div className="text-sm font-bold text-[#3C4043] mt-1 leading-tight">
                          <div>Work Transformation</div>
                          <div>Enterprise</div>
                        </div>
                      </div>
                      <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                    </div>

                    <div className="cert-card-box flex flex-col items-center justify-between text-center p-4">
                      <div className="flex flex-col items-center pt-1">
                        <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                          <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                          <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                        </svg>
                        <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SPECIALIZATION</div>
                        <div className="text-sm font-bold text-[#3C4043] mt-1 leading-tight">
                          <div>Data</div>
                          <div>Analytics</div>
                        </div>
                      </div>
                      <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                    </div>

                    <div className="cert-card-box flex flex-col items-center justify-between text-center p-4">
                      <div className="flex flex-col items-center pt-1">
                        <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                          <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                          <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                        </svg>
                        <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SELL | SERVICE</div>
                        <div className="text-sm font-bold text-[#3C4043] mt-1 leading-tight">
                          <div>Premier</div>
                          <div>Partner</div>
                        </div>
                      </div>
                      <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                    </div>
                  </>
                )}

                {/* ISV Tab Items */}
                {partnerCertTab === 'ISV' && (
                  <>
                    {/* 1. Akamai */}
                    <div className="cert-card-box flex-center p-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-1">
                          <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none">
                            <path d="M 8 26 C 6 18 12 10 20 8 C 14 12 12 18 14 24 C 15 27 18 29 22 28 C 28 26 32 20 30 12 C 34 18 32 26 26 30 C 20 34 12 32 8 26 Z" fill="#0099DE" />
                            <path d="M 16 32 C 12 28 12 22 16 18 C 20 14 26 14 28 18 C 24 16 18 18 16 22 C 14 26 16 30 20 32 C 18 33 17 33 16 32 Z" fill="#FF6600" />
                          </svg>
                          <span className="text-base font-extrabold text-[#FF6600] tracking-tight font-sans">Akamai</span>
                        </div>
                        <span className="text-slate-300 font-light text-base">|</span>
                        <span className="text-xs font-bold text-[#424242]">Elite Partner</span>
                      </div>
                    </div>

                    {/* 2. Datadog DPN */}
                    <div className="cert-card-box flex-center p-4">
                      <div className="relative w-24 h-28 flex items-center justify-center">
                        <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-sm">
                          <defs>
                            <linearGradient id="purpleHex" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#6E25B7" />
                              <stop offset="100%" stopColor="#3C096C" />
                            </linearGradient>
                          </defs>
                          <polygon points="50,3 95,28 95,87 50,112 5,87 5,28" fill="url(#purpleHex)" stroke="#9D4EDD" strokeWidth="2" />
                          <polygon points="50,8 90,31 90,84 50,107 10,84 10,31" fill="none" stroke="#E0AAFF" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5" />
                          <path d="M 46 26 L 54 26 C 56 26 57 28 55 30 L 52 33 L 55 36 C 56 38 54 40 52 38 L 48 38 C 46 40 44 38 45 36 L 48 33 L 45 30 C 43 28 44 26 46 26 Z" fill="#FFFFFF" />
                          <circle cx="48" cy="29" r="1" fill="#3C096C" />
                          <text x="50" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">DPN</text>
                          <text x="50" y="69" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.2">PREMIER TIER</text>
                          <text x="50" y="81" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.3">PARTNER</text>
                        </svg>
                      </div>
                    </div>

                    {/* 3. Databricks */}
                    <div className="cert-card-box flex-center p-4">
                      <div className="relative w-24 h-28 flex items-center justify-center">
                        <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-sm">
                          <path d="M 10 10 L 90 10 L 90 82 Q 90 115 50 120 Q 10 115 10 82 Z" fill="#1C2833" />
                          <g transform="translate(26, 15) scale(0.65)">
                            <path d="M 10 5 L 35 18 L 60 5 L 35 0 Z M 10 12 L 35 25 L 60 12 L 35 18 Z M 10 19 L 35 32 L 60 19 L 35 25 Z" fill="#FF3621" />
                            <text x="68" y="22" fill="#FFFFFF" fontSize="16" fontWeight="bold">databricks</text>
                          </g>
                          <rect x="18" y="38" width="64" height="32" fill="#FFFFFF" rx="2" />
                          <text x="50" y="51" textAnchor="middle" fill="#1C2833" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">CONSULTING</text>
                          <text x="50" y="63" textAnchor="middle" fill="#1C2833" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">PARTNER</text>
                          <rect x="22" y="73" width="56" height="15" fill="#FF9900" rx="1" />
                          <text x="50" y="84" textAnchor="middle" fill="#1C2833" fontSize="8" fontWeight="800" fontFamily="sans-serif">Elite</text>
                          <circle cx="36" cy="100" r="8" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeDasharray="3,1.5" />
                          <circle cx="60" cy="100" r="9" fill="none" stroke="#FF9900" strokeWidth="3" strokeDasharray="3.5,1.5" />
                        </svg>
                      </div>
                    </div>

                    {/* 4. SAP */}
                    <div className="cert-card-box flex-center p-4">
                      <div className="relative w-32 h-20 flex items-center justify-center">
                        <svg viewBox="0 0 140 80" className="w-full h-full drop-shadow-xs">
                          <polygon points="10,10 90,10 65,55 10,55" fill="#008FD3" />
                          <text x="22" y="42" fill="#FFFFFF" fontSize="26" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">SAP</text>
                          <polygon points="65,22 130,22 130,70 42,70" fill="#EAAA00" />
                          <text x="118" y="46" textAnchor="end" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">Gold</text>
                          <text x="118" y="63" textAnchor="end" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">Partner</text>
                        </svg>
                      </div>
                    </div>

                    {/* 5. Snowflake */}
                    <div className="cert-card-box flex-center p-4">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg viewBox="0 0 110 110" className="w-full h-full drop-shadow-xs">
                          <circle cx="55" cy="55" r="50" fill="none" stroke="#FF8C00" strokeWidth="4" />
                          <circle cx="55" cy="55" r="45" fill="#0099DD" />
                          <g transform="translate(43, 16) scale(0.6)">
                            <path d="M 20 0 L 20 20 M 10 10 L 30 10 M 13 3 L 27 17 M 13 17 L 27 3" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                          </g>
                          <text x="55" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="800" fontFamily="sans-serif">snowflake</text>
                          <text x="55" y="43" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.1">AI DATA CLOUD</text>
                          <text x="55" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="4.8" fontWeight="800" fontFamily="sans-serif">SERVICES PARTNER</text>
                          <path d="M 46 63 C 44 59 48 56 52 57 C 54 54 60 55 61 58 C 64 58 65 62 62 64 Z" fill="#FFFFFF" />
                          <path d="M 43 67 C 48 65 52 67 56 69 C 60 69 63 66 66 65 C 63 70 58 71 52 69 Z" fill="#FFFFFF" />
                          <text x="55" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">ELITE</text>
                        </svg>
                      </div>
                    </div>

                    {/* 6. Cloudflare */}
                    <div className="cert-card-box flex-center p-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                            <path d="M22.5 13.5C21.9 10.1 18.9 7.5 15.3 7.5C12.4 7.5 9.9 9.1 8.6 11.5C5.6 11.8 3.3 14.4 3.3 17.5C3.3 20.8 6 23.5 9.3 23.5H22.3C25.2 23.5 27.5 21.2 27.5 18.3C27.5 15.6 25.4 13.7 22.5 13.5Z" fill="#F38020" />
                          </svg>
                          <span className="text-xs font-black text-[#404040] tracking-wider uppercase font-sans">CLOUDFLARE</span>
                        </div>
                        <span className="text-slate-300 font-light text-base">|</span>
                        <div className="text-[11px] font-bold text-[#F38020] leading-none text-left">
                          <div>Powered+</div>
                          <div>Partner</div>
                        </div>
                      </div>
                    </div>

                    {/* 7. GitLab */}
                    <div className="cert-card-box flex-center p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#171321] rounded-xl flex items-center justify-center shadow-xs">
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <span className="text-slate-300 font-light text-lg">|</span>
                        <div className="flex flex-col text-left">
                          <div className="flex items-center gap-1 mb-0.5">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51a.42.42 0 01.8 0l2.44 7.51h8.2l2.44-7.51a.42.42 0 01.8 0l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z" fill="#E24329" />
                            </svg>
                            <span className="text-xs font-bold text-[#292929]">GitLab</span>
                          </div>
                          <div className="text-xs font-extrabold text-[#171321] leading-tight">Select Partner</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Block 3: TECH & SOLUTION PARTNERS (Marquee) */}
            <div className="partner-block pt-6">
              <div className="partner-block-head">
                <span className="block-head-badge">TECH & SOLUTION PARTNERS</span>
                <span className="block-head-desc">AI · 데이터 · 인프라 전 영역의 파트너십</span>
              </div>

              <div className="tech-marquee-wrapper">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f8fafc] to-transparent z-10"></div>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f8fafc] to-transparent z-10"></div>
                <div className="tech-marquee-track">
                  {[1, 2].map((loop) => (
                    <div key={loop} className="flex gap-4 flex-shrink-0">
                      {/* Red Hat */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 40 32">
                            <path d="M12 21.5c-3.8 0-8.5-1.5-10.5-3 0 0 3 4 10.5 4s14.5-2.5 15.5-5.5c1-3 0-5.5-3.5-5.5s-6.5.5-9 1c-2.5.5-3.5.5-3-.5s2-2 4.5-2 5.5.5 7.5 1.5c2 1 3.5 2 3.5 4.5 0 4.5-7 5.5-15.5 5.5z" fill="#CC0000" />
                            <path d="M26.5 12.5c0 0-2.5-3-8.5-3s-10.5 2.5-10.5 5.5c0 1.5 1 2.5 2.5 3s3.5 0 5-.5c1.5-.5 3.5-.5 3 .5s-1.5 2-4 2-5-.5-6.5-1.5c-1.5-1-2.5-2-2.5-4 0-4 6-6.5 13-6.5s10 2.5 10 5.5c0 1-.5 2-1.5 2.5z" fill="#000000" />
                          </svg>
                          <span className="text-lg font-black text-slate-900 tracking-tight">Red Hat</span>
                        </div>
                      </div>

                      {/* ATLASSIAN */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#0052CC">
                            <path d="M6.8 12.8L12 3l5.2 9.8c.4.8 1.4 1 2.1.6.8-.4 1-.1.6-.2l-6.8-12.8c-.6-1.1-2.2-1.1-2.8 0L3.5 13.2c-.4.8-.1 1.8.7 2.2.8.4 1.8.1 2.2-.7l.4-.9z" />
                            <path d="M11 15.5l1 1.9 1-1.9h-2z" opacity="0.6" />
                          </svg>
                          <span className="text-lg font-black text-[#0052CC] tracking-tight">ATLASSIAN</span>
                        </div>
                      </div>

                      {/* GitLab */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51a.42.42 0 01.8 0l2.44 7.51h8.2l2.44-7.51a.42.42 0 01.8 0l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z" fill="#E24329" />
                          </svg>
                          <span className="text-lg font-black text-slate-900 tracking-tight">GitLab</span>
                        </div>
                      </div>

                      {/* MongoDB */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-7 flex-shrink-0" viewBox="0 0 24 28">
                            <path d="M12 0C12 0 11.8 3 11.5 5.5C10.5 11.5 6 13.5 6 18.5C6 22.5 8.5 25.5 12 26.5C15.5 25.5 18 22.5 18 18.5C18 13.5 13.5 11.5 12.5 5.5C12.2 3 12 0 12 0Z" fill="#13AA52" />
                            <path d="M12 0C12 0 12 23.5 12 28C12.5 27.8 13 27.5 13.5 27.2C13 25.5 12.8 21.5 12.8 18.5C12.8 13.5 12.3 11.5 12 0Z" fill="#118D4B" />
                          </svg>
                          <span className="text-lg font-extrabold text-[#001E2B] tracking-tight">MongoDB.</span>
                        </div>
                      </div>

                      {/* CONFLUENT */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 32 32">
                            <circle cx="16" cy="16" r="14" fill="none" stroke="#132338" strokeWidth="2" />
                            <path d="M8 16 L24 16 M16 8 L16 24 M10 10 L22 22 M22 10 L10 22" stroke="#132338" strokeWidth="1.5" />
                          </svg>
                          <span className="text-base font-black text-[#132338] tracking-widest uppercase">CONFLUENT</span>
                        </div>
                      </div>

                      {/* Fivetran */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2.5">
                          <svg className="w-6 h-7 flex-shrink-0" viewBox="0 0 24 28">
                            <path d="M6 0 L16 0 L10 28 L0 28 Z" fill="#0066FF" />
                            <path d="M14 0 L24 0 L18 28 L8 28 Z" fill="#0066FF" opacity="0.5" />
                          </svg>
                          <span className="text-xl font-black text-[#0066FF] tracking-tight">Fivetran</span>
                        </div>
                      </div>

                      {/* WhaTap */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <div className="flex items-end gap-0.5 h-6">
                            <div className="w-1.5 h-3 bg-[#FF6B00]"></div>
                            <div className="w-1.5 h-4.5 bg-[#00B0FF]"></div>
                            <div className="w-1.5 h-6 bg-[#00E676]"></div>
                          </div>
                          <span className="text-xl font-bold text-slate-700 tracking-tight">WhaTap</span>
                        </div>
                      </div>

                      {/* NVIDIA */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-8 h-6 flex-shrink-0" viewBox="0 0 36 24">
                            <rect width="36" height="24" rx="2" fill="#76B900" />
                            <path d="M8 12 C8 9 12 7 16 7 C20 7 24 9 24 12 C24 15 20 17 16 17" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
                          </svg>
                          <span className="text-xl font-black text-slate-900 tracking-tighter">NVIDIA</span>
                        </div>
                      </div>

                      {/* databricks */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 32 32">
                            <path d="M4 8 L16 14 L28 8 L16 2 Z M4 14 L16 20 L28 14 L16 18 Z M4 20 L16 26 L28 20 L16 24 Z" fill="#FF3621" />
                          </svg>
                          <span className="text-xl font-black text-slate-900 tracking-tight">databricks</span>
                        </div>
                      </div>

                      {/* DELL */}
                      <div className="tech-logo-card">
                        <span className="text-2xl font-black text-[#0076CE] tracking-tighter">DELL</span>
                      </div>

                      {/* NUTANIX */}
                      <div className="tech-logo-card">
                        <span className="text-lg font-black text-slate-900 tracking-widest uppercase">NUTANIX</span>
                      </div>

                      {/* veeam */}
                      <div className="tech-logo-card">
                        <div className="bg-[#00D639] px-3.5 py-1.5 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-black text-white tracking-tight">veeam</span>
                        </div>
                      </div>

                      {/* MariaDB */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-7 h-6 flex-shrink-0" viewBox="0 0 32 24">
                            <path d="M2 18 C6 14 10 6 16 8 C20 9 22 14 28 10 C26 16 20 20 12 19 Z" fill="#C27D38" />
                          </svg>
                          <span className="text-lg font-extrabold text-[#003545]">MariaDB</span>
                        </div>
                      </div>

                      {/* Qlik */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-1">
                          <div className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-700">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#009845]"></div>
                          </div>
                          <span className="text-xl font-bold text-slate-800">lik</span>
                        </div>
                      </div>

                      {/* Splunk */}
                      <div className="tech-logo-card">
                        <div className="flex flex-col items-center">
                          <div className="text-lg font-black text-slate-900 tracking-tight">splunk &gt;</div>
                          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider -mt-0.5">a CISCO company</div>
                        </div>
                      </div>

                      {/* ORACLE */}
                      <div className="tech-logo-card">
                        <span className="text-xl font-black text-[#F80000] tracking-widest font-serif">ORACLE</span>
                      </div>

                      {/* New Relic */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2 L2 7 L2 17 L12 22 L22 17 L22 7 Z" stroke="#00AC69" strokeWidth="2.5" strokeLinejoin="round" />
                            <path d="M12 2 L12 12 M2 7 L12 12 M22 7 L12 12" stroke="#00AC69" strokeWidth="2" />
                          </svg>
                          <span className="text-lg font-extrabold text-[#1D252C]">new relic</span>
                        </div>
                      </div>

                      {/* Grafana Labs */}
                      <div className="tech-logo-card">
                        <div className="flex items-center gap-2">
                          <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 28 28">
                            <circle cx="14" cy="14" r="10" fill="none" stroke="#F46800" strokeWidth="3" />
                            <path d="M14 4 C18 8 18 20 14 24" fill="none" stroke="#F46800" strokeWidth="2" />
                          </svg>
                          <span className="text-base font-extrabold text-slate-900">
                            Grafana <span className="text-[#F46800]">Labs</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: 6 Core Benefits */}
      <section className="section-benefits" id="benefits">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">BENEFITS</span>
            <h2 className="section-title">훈련생 수강 혜택</h2>
            <p className="section-desc">메가존클라우드 AI-Native 부트캠프 1기 한정 혜택 — 교육에만 집중할 수 있도록 전 과정을 지원합니다.</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card reveal-item reveal-delay-1">
              <div className="benefit-icon-box"><Briefcase size={24} /></div>
              <span className="benefit-tag">채용 연계 기회</span>
              <h3>인턴십 우선 선발 & 채용 Pool 등록</h3>
              <p>메가존클라우드 · 관계사 · 주요 파트너사 인턴십 우선 선발, 전용 채용 프리패스 Pool 등록</p>
            </div>
            <div className="benefit-card reveal-item reveal-delay-2">
              <div className="benefit-icon-box"><Coins size={24} /></div>
              <span className="benefit-tag">교육비 0원</span>
              <h3>수강료 전액 지원 & 훈련장려금</h3>
              <p>고용노동부 전액 지원 교육비 0원 + 매월 최대 40만 원 훈련장려금 지급</p>
            </div>
            <div className="benefit-card reveal-item reveal-delay-3">
              <div className="benefit-icon-box"><Monitor size={24} /></div>
              <span className="benefit-tag">장비·인프라 지원</span>
              <h3>노트북 & 고성능 인프라 지원</h3>
              <p>1인 1노트북, 최고 사양 서버·클라우드 인프라와 최신 AI 솔루션 무상 지원</p>
            </div>
            <div className="benefit-card reveal-item reveal-delay-4">
              <div className="benefit-icon-box"><Award size={24} /></div>
              <span className="benefit-tag">자격증 지원</span>
              <h3>공인 자격증 바우처 100% 제공</h3>
              <p>과정별 관련 공인 자격증 응시료 100% 전액 지원 (과정당 1회)</p>
            </div>
            <div className="benefit-card reveal-item reveal-delay-5">
              <div className="benefit-icon-box"><Compass size={24} /></div>
              <span className="benefit-tag">현직자 밀착 가이드</span>
              <h3>메가존 AI·클라우드 현직자 멘토링</h3>
              <p>아키텍처 설계부터 실전 코드 리뷰까지 현업 전문가의 실무 밀착 지도</p>
            </div>
            <div className="benefit-card reveal-item reveal-delay-6">
              <div className="benefit-icon-box"><GraduationCap size={24} /></div>
              <span className="benefit-tag">웰컴키트 & 수료증</span>
              <h3>프리미엄 웰컴키트 & 공식 수료증</h3>
              <p>웰컴키트 지급, 메가존클라우드 명의의 공식 수료증 수여</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Career Bridge (Megazone Tech Bridge & Coaching) */}
      <section className="section-career" id="career">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">CAREER BRIDGE</span>
            <h2 className="section-title">서류부터 면접까지, 메가존클라우드 취업지원 솔루션</h2>
            <p className="section-desc">1:1 심층 코칭부터 채용 연계까지, 수료 후 180일 사후 관리로 이어집니다.</p>
          </div>

          {/* Main Tech Bridge Banner Box */}
          <div className="tech-bridge-box reveal-item">
            <div className="bridge-left">
              <span className="bridge-sub">MEGAZONE TECH BRIDGE PROGRAM</span>
              <h3>메가존 그룹 20+ 자회사<br /><span style={{ color: '#00d2ff' }}>연간 300명+ 신규 채용 네트워크</span></h3>
              <p>교육 성과가 채용으로 이어지도록 설계된 메가존만의 취업 연계 트랙입니다. 인증된 우수 수료생을 메가존 그룹과 파트너사의 채용 포지션에 직접 연결합니다.</p>
              <div className="special-badge-wrap">
                <div className="badge-head">
                  <Award size={18} style={{ color: '#f59e0b' }} />
                  <strong>우수 수료생 특전</strong>
                  <span className="badge-pill">Special</span>
                </div>
                <p>서류 전형 면제 · 인턴십 연계 · 그룹사 및 파트너사 채용 기회 우선 제공</p>
              </div>
            </div>
            <div className="bridge-right">
              <div className="bridge-step-card reveal-item reveal-delay-1">
                <span className="b-step">1 · 선발</span>
                <h4>사업부 리더가 면접 직접 참여</h4>
                <p>채용 예정 사업부의 리더가 선발 단계부터 직접 훈련생을 평가합니다.</p>
              </div>
              <div className="bridge-step-card reveal-item reveal-delay-2">
                <span className="b-step">2 · 교육</span>
                <h4>현직자 멘토 배치 · 최적 팀 매칭</h4>
                <p>누적 학습 데이터 기반 개인별 직무 분석으로 최적의 팀과 멘토를 매칭합니다.</p>
              </div>
              <div className="bridge-step-card reveal-item reveal-delay-3">
                <span className="b-step">3 · 인증</span>
                <h4>MTP 인증 등급 부여</h4>
                <p>출결·역량 달성률·프로젝트 품평회 결과를 종합해 인증 등급을 산출합니다.</p>
              </div>
              <div className="bridge-step-card reveal-item reveal-delay-4">
                <span className="b-step">4 · 채용</span>
                <h4>등급별 채용 연계 혜택</h4>
                <p>우수 수료생은 서류 면제·인턴십 등 메가존얼라이언스 채용 전형에 직접 연결됩니다.</p>
              </div>
            </div>
          </div>

          {/* 1:1 Coaching 3 Steps */}
          <div className="coaching-grid" style={{ marginTop: '32px' }}>
            <div className="coaching-card reveal-item reveal-delay-1">
              <div className="c-step-badge">1</div>
              <h4>IT 채용 트렌드 & 취업특강</h4>
              <p>IT·클라우드 업계 최신 채용 트렌드, 직무별 핵심 역량(Tech Stack) 분석과 취업 준비 방향 제시</p>
            </div>
            <div className="coaching-card reveal-item reveal-delay-2">
              <div className="c-step-badge">2</div>
              <h4>1:1 이력서·자기소개서 코칭</h4>
              <p>개인별 프로젝트 경험과 강점을 분석해 최적의 이력서·자소서 완성까지 1:1 밀착 지도</p>
            </div>
            <div className="coaching-card reveal-item reveal-delay-3">
              <div className="c-step-badge">3</div>
              <h4>실전 대비 1:1 모의면접 훈련</h4>
              <p>현직 실무자 출신 코치와 실전형 모의면접 시뮬레이션 진행, 실시간 피드백 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Video & Reviews */}
      <section className="section-reviews" id="reviews">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-subtitle">REVIEWS</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>수강생의 목소리</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>메가존 교육과정을 먼저 경험한 수료생들의 이야기를 직접 들어보세요.</p>
            
            {/* Hire Highlight Banner */}
            <div className="hire-highlight-pill">
              메가존클라우드 훈련과정을 수료한 수료생 중 <strong className="hire-highlight-num">90명</strong>이 메가존클라우드에 입사했습니다.
            </div>
          </div>

          {/* Video Interviews Grid */}
          <div className="video-interviews-grid">
            {/* Interview 1 */}
            <div className="video-interview-card reveal-item reveal-delay-1">
              <div className="video-interview-media">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  src="https://training.megazone.com/ai-campus/vid/interview1.mp4"
                />
              </div>
              <div className="video-interview-body">
                <h3>김O한 수료생 인터뷰</h3>
                <div className="video-tag-pills">
                  <span className="video-tag-pill"># 수료생 인터뷰</span>
                  <span className="video-tag-pill"># 교육 후기</span>
                </div>
              </div>
            </div>

            {/* Interview 2 */}
            <div className="video-interview-card reveal-item reveal-delay-2">
              <div className="video-interview-media">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  src="https://training.megazone.com/ai-campus/vid/interview2.mp4"
                />
              </div>
              <div className="video-interview-body">
                <h3>이O진 수료생 인터뷰</h3>
                <div className="video-tag-pills">
                  <span className="video-tag-pill"># 수료생 인터뷰</span>
                  <span className="video-tag-pill"># 성장 스토리</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Full Width Marquee */}
        <div className="reviews-marquee-outer reveal-item">
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
          <div className="review-marquee-track">
            {[
              {
                text: "스스로 하고자 하는 의지만 있다면 짧은 시간에 빠르게 성장할 수 있는 과정입니다. 어려운 개념도 이해될 때까지 설명해주시는 강사님과 실무 시각에서 조언해주시는 멘토님 덕분에 6개월간 크게 성장했습니다.",
                name: "김○○",
                course: "KDT 과정 수료"
              },
              {
                text: "학부에서는 개발 위주라 네트워크·인프라를 공부하기 어려웠는데, 이 과정을 수료하며 커리어 방향을 잡을 수 있었고 기대 이상으로 깊이 있게 배웠습니다. 다른 교육과 달리 실무 중심으로 설명해주셔서 배운 점과 느낀 점이 많았습니다.",
                name: "이○○",
                course: "KDT 과정 수료"
              },
              {
                text: "실무에서 바로 활용 가능한 기술로 구성되어 매우 실질적이었습니다. 대부분 실습 위주라 몸에 익히기 좋았고, 끝까지 포기하지 않으면 분명히 성장한 자신을 확인할 수 있습니다.",
                name: "박○○",
                course: "KDT 과정 수료"
              },
              {
                text: "여러 훈련과정을 거쳐봤지만 이만한 과정은 없었습니다. 클라우드에 관심이 있어 시작할 생각이라면 메가존을 적극 추천합니다. 대신 본인도 의지를 갖고 적극적으로 참여해야 합니다.",
                name: "최○○",
                course: "KDT 과정 수료"
              },
              {
                text: "클라우드 업계에 입문할 수 있는 기초 지식과 여러 엔지니어링 베이스를 함께 공부할 수 있어 매우 의미 있는 교육이었습니다.",
                name: "정○○",
                course: "KDT 과정 수료"
              },
              {
                text: "비전공자인 저도 6개월 동안 정말 많은 것을 배웠고, 후회 없는 선택이었습니다. 거의 매일 실습과 문서 작성을 병행하며 이 기술이 무엇이고 어떻게 활용했는지 스스로 돌아볼 수 있었고, 기술 습득을 넘어 기록하고 활용하는 방법까지 배우는 과정이었습니다.",
                name: "한○○",
                course: "KDT 과정 수료"
              },
              // Duplicated for seamless loop
              {
                text: "스스로 하고자 하는 의지만 있다면 짧은 시간에 빠르게 성장할 수 있는 과정입니다. 어려운 개념도 이해될 때까지 설명해주시는 강사님과 실무 시각에서 조언해주시는 멘토님 덕분에 6개월간 크게 성장했습니다.",
                name: "김○○",
                course: "KDT 과정 수료"
              },
              {
                text: "학부에서는 개발 위주라 네트워크·인프라를 공부하기 어려웠는데, 이 과정을 수료하며 커리어 방향을 잡을 수 있었고 기대 이상으로 깊이 있게 배웠습니다. 다른 교육과 달리 실무 중심으로 설명해주셔서 배운 점과 느낀 점이 많았습니다.",
                name: "이○○",
                course: "KDT 과정 수료"
              },
              {
                text: "실무에서 바로 활용 가능한 기술로 구성되어 매우 실질적이었습니다. 대부분 실습 위주라 몸에 익히기 좋았고, 끝까지 포기하지 않으면 분명히 성장한 자신을 확인할 수 있습니다.",
                name: "박○○",
                course: "KDT 과정 수료"
              },
              {
                text: "여러 훈련과정을 거쳐봤지만 이만한 과정은 없었습니다. 클라우드에 관심이 있어 시작할 생각이라면 메가존을 적극 추천합니다. 대신 본인도 의지를 갖고 적극적으로 참여해야 합니다.",
                name: "최○○",
                course: "KDT 과정 수료"
              },
              {
                text: "클라우드 업계에 입문할 수 있는 기초 지식과 여러 엔지니어링 베이스를 함께 공부할 수 있어 매우 의미 있는 교육이었습니다.",
                name: "정○○",
                course: "KDT 과정 수료"
              },
              {
                text: "비전공자인 저도 6개월 동안 정말 많은 것을 배웠고, 후회 없는 선택이었습니다. 거의 매일 실습과 문서 작성을 병행하며 이 기술이 무엇이고 어떻게 활용했는지 스스로 돌아볼 수 있었고, 기술 습득을 넘어 기록하고 활용하는 방법까지 배우는 과정이었습니다.",
                name: "한○○",
                course: "KDT 과정 수료"
              }
            ].map((rev, rIdx) => (
              <div key={rIdx} className="review-speech-card">
                <div className="review-stars-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="review-quote-text">"{rev.text}"</p>
                <div className="review-user-footer">
                  <div className="review-avatar">{rev.name[0]}</div>
                  <div className="review-user-info">
                    <div className="review-user-name">{rev.name}</div>
                    <div className="review-user-course">{rev.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <p className="review-disclaimer-text reveal-item">
            기존 운영 K-디지털 트레이닝 과정 수강평(고용24 등록 후기) 기준
          </p>
        </div>
      </section>

      {/* Section 10-2: Project Review Sketch */}
      <section className="section-project-sketch">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">PROJECT REVIEW</span>
            <h2 className="section-title">프로젝트 품평회 현장 스케치</h2>
            <p className="section-desc">교육의 마지막, 실전 프로젝트의 결과를 발표하고 현업 전문가의 피드백을 받는 품평회 현장입니다.</p>
          </div>

          <div className="sketch-content-grid">
            <div className="sketch-video-box reveal-item reveal-delay-1">
              <video
                controls
                preload="metadata"
                playsInline
                src="https://training.megazone.com/ai-campus/vid/sketch.mp4"
              />
            </div>
            <div className="sketch-points-box">
              {[
                { num: "01", text: "실전 프로젝트 결과를 직접 발표하는 공식 품평회" },
                { num: "02", text: "현업 전문가 · 멘토의 실무 관점 피드백" },
                { num: "03", text: "우수 프로젝트는 채용 연계 평가에 반영" }
              ].map((item, iIdx) => (
                <div key={iIdx} className={`sketch-point-card reveal-item reveal-delay-${iIdx + 1}`}>
                  <div className="sketch-point-num">{item.num}</div>
                  <div className="sketch-point-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Who Is It For */}
      <section className="section-who" id="who">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">WHO IS IT FOR</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>이런 분께 추천합니다</h2>
            <p className="section-desc" style={{ color: '#94a3b8' }}>전공·경력과 무관하게, AI 엔지니어로 성장하고 싶은 분이라면 누구나 시작할 수 있습니다.</p>
          </div>

          <div className="who-grid">
            <div className="who-card reveal-item reveal-delay-1">
              <span className="who-num">01</span>
              <div>
                <h4>IT/AI 직무 취업을 준비하는 분</h4>
                <p>실무 프로젝트 중심 커리큘럼으로 취업 포트폴리오를 완성합니다.</p>
              </div>
            </div>
            <div className="who-card reveal-item reveal-delay-2">
              <span className="who-num">02</span>
              <div>
                <h4>이공계 졸업(예정)으로 AI 직무 전환을 준비하는 분</h4>
                <p>기존 전공 지식을 살려 AI·클라우드 직무로 커리어를 확장합니다.</p>
              </div>
            </div>
            <div className="who-card reveal-item reveal-delay-3">
              <span className="who-num">03</span>
              <div>
                <h4>비전공이지만 AI에 도전하려는 분</h4>
                <p>코딩·IT 기초 경험이 있다면 공통 기초 과정으로 따라올 수 있습니다.</p>
              </div>
            </div>
            <div className="who-card reveal-item reveal-delay-4">
              <span className="who-num">04</span>
              <div>
                <h4>기초부터 탄탄히 실무 역량을 쌓고 싶은 분</h4>
                <p>개념 학습부터 현업형 프로젝트까지 단계별로 완주합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Process */}
      <section className="section-process" id="process">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="section-subtitle">Process</span>
            <h2 className="section-title">지원 안내</h2>
            <p className="section-desc">신청서 접수 후 평가·발표 일정은 개별 안내드립니다.</p>
          </div>

          <div className="process-grid">
            <div className="eligibility-box reveal-item reveal-delay-1">
              <h3>📋 지원 자격</h3>
              <ul>
                <li>학력 및 전공 무관</li>
                <li>국민내일배움카드 보유자 또는 신규 발급 가능자 (발급 문의: 고용노동부 1350)</li>
                <li>교육 기간 동안 전일 오프라인 참여 및 수료 후 취업이 가능하신 분</li>
                <li>졸업 요건을 충족한 졸업(예정)자 및 미취업자 (재직자는 교육 시작 전 퇴직 처리 필수)</li>
              </ul>
            </div>
            <div className="steps-box reveal-item reveal-delay-2">
              <h3>🚀 지원 절차</h3>
              <div className="step-items">
                <div className="step-item active">
                  <div className="step-circle">01</div>
                  <div className="step-info">
                    <strong>신청서 작성</strong>
                    <span>지금 접수 중</span>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-circle">02</div>
                  <div className="step-info">
                    <strong>역량 및 면접 평가</strong>
                    <span>개별 안내 예정</span>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-circle">03</div>
                  <div className="step-info">
                    <strong>합격자 발표</strong>
                    <span>일정 추후 공지</span>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-circle">04</div>
                  <div className="step-info">
                    <strong>최종 입과</strong>
                    <span>9월 중 개강</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Campus Location */}
      <section className="section-location" id="location">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">LOCATION</span>
            <h2 className="section-title">오시는 길 · 교육장소</h2>
            <p className="section-desc">두 곳의 메가존클라우드 캠퍼스에서 과정별로 진행됩니다.</p>
          </div>

          <div className="location-grid">
            {/* Gwacheon Campus */}
            <div className="location-card reveal-item reveal-delay-1">
              <CampusSlider
                images={gwacheonImages}
                altPrefix="과천 캠퍼스"
                tags={["TRACK 01 에이전트", "TRACK 02 아키텍트"]}
              />
              <div className="loc-body">
                <h3>과천 캠퍼스</h3>
                <p className="loc-detail">과천 메가존클라우드 2층 교육장</p>
                <p className="loc-addr"><MapPin size={16} /> 경기도 과천시 과천대로7길 74</p>
              </div>
            </div>

            {/* Yeoksam Campus */}
            <div className="location-card reveal-item reveal-delay-2">
              <CampusSlider
                images={yeoksamImages}
                altPrefix="역삼 캠퍼스"
                tags={["TRACK 03 보안", "TRACK 04 데이터"]}
              />
              <div className="loc-body">
                <h3>역삼 캠퍼스</h3>
                <p className="loc-detail">역삼 메가존클라우드 2층 교육장</p>
                <p className="loc-addr"><MapPin size={16} /> 서울 강남구 논현로85길 46</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: FAQ */}
      <section className="section-faq" id="faq">
        <div className="container">
          <div className="reveal-item" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">자주 묻는 질문</h2>
          </div>

          <div className="faq-accordion reveal-item">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </button>
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 15: Apply Form */}
      <section className="section-apply" id="apply">
        <div className="container">
          <div className="apply-yellow-layout">
            {/* Left Content */}
            <div className="apply-yellow-left reveal-item reveal-delay-1">
              <h2 className="apply-yellow-title">
                지금, AI 취업에<br />도전하세요!
              </h2>
              <p className="apply-yellow-sub">
                국비지원 자격 여부부터 취업 및 교육과정까지<br />
                <u>무료로 상담해드립니다.</u>
              </p>

              <div className="apply-yellow-contact">
                <a
                  href="tel:1877-5280"
                  className="apply-contact-item"
                  onClick={(e) => {
                    if (window.innerWidth >= 768) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="apply-icon-circle">
                    <Phone size={22} color="#ffffff" fill="#ffffff" />
                  </div>
                  <div className="apply-contact-text">
                    <span className="apply-contact-label">교육문의</span>
                    <span className="apply-contact-value phone-number">1877-5280</span>
                  </div>
                </a>
                <div className="apply-contact-item">
                  <div className="apply-icon-circle">
                    <MapPin size={22} color="#ffffff" />
                  </div>
                  <div className="apply-contact-text">
                    <span className="apply-contact-label">교육장소</span>
                    <span className="apply-contact-value">역삼(강남) / 과천</span>
                  </div>
                </div>
              </div>

              <p className="apply-yellow-cheer">
                여러분의 꿈을 응원합니다!
              </p>
            </div>

            {/* Right Form Card */}
            <div className="apply-form-card reveal-item reveal-delay-2">
              <h3 className="apply-form-title">
                빠른 교육상담 신청<span className="purple-dot">●</span>
              </h3>
              <form
                id="applyForm"
                action="https://inputhaven.com/api/v1/submit"
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <input type="hidden" name="_form_id" value="e0753dd0894eeda822c09200b6c34a1e" />
                {/* Row 1: Name & Age */}
                <div className="apply-form-row-2">
                  <div className="apply-form-group">
                    <label htmlFor="userName">
                      이름 <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="name"
                      placeholder="홍길동"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="apply-form-group">
                    <label htmlFor="userAge">
                      나이 <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="userAge"
                      name="age"
                      placeholder="예: 30"
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                </div>

                {/* Row 2: Phone */}
                <div className="apply-form-group">
                  <label htmlFor="userPhone">
                    연락처 <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="userPhone"
                    name="phone"
                    placeholder="010-0000-0000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Row 3: Course selection */}
                <div className="apply-form-group">
                  <label>
                    과정명 <span className="req">*</span>
                  </label>
                  <div className="course-pills-grid">
                    {[
                      '메가존 AI에이전트',
                      '메가존 AI아키텍트',
                      '메가존 AI보안',
                      '메가존 AI데이터'
                    ].map((courseName) => {
                      const isSelected = formData.track === courseName;
                      return (
                        <label
                          key={courseName}
                          className={`course-pill-item ${isSelected ? 'selected' : ''}`}
                        >
                          <input
                            type="radio"
                            name="course"
                            value={courseName}
                            checked={isSelected}
                            onChange={() => setFormData({ ...formData, track: courseName })}
                          />
                          <span className="radio-circle"></span>
                          <span className="course-name">{courseName}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Row 4: Inquiries (Optional) */}
                <div className="apply-form-group">
                  <label htmlFor="userContent">
                    문의내용 <span className="opt">(선택)</span>
                  </label>
                  <textarea
                    id="userContent"
                    name="message"
                    placeholder="궁금하신 점을 자유롭게 적어주세요."
                    rows={2}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                </div>

                {/* Row 5: Agreement */}
                <div className="apply-agree-row">
                  <label className="apply-agree-checkbox">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    />
                    <span className="agree-text">개인정보 수집 및 이용에 동의합니다.</span>
                  </label>
                  <button
                    type="button"
                    className="privacy-detail-btn"
                    onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
                  >
                    <span>{showPrivacyDetails ? '접기' : '자세히보기'}</span>
                    {showPrivacyDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                {/* Privacy Policy Scrollable Container */}
                {showPrivacyDetails && (
                  <div className="privacy-details-scrollbox">
                    <p className="privacy-details-title">[개인정보 수집·이용 동의] (필수)</p>
                    <div className="privacy-details-section">
                      <strong>1. 개인정보의 수집·이용 목적</strong>
                      <p>교육 과정 신청 접수 및 본인 확인</p>
                      <p>선발 전형 진행(서류 심사) 및 안내</p>
                      <p>과정 개강, 설명회 등 관련 정보 안내 (문자, 이메일)</p>
                    </div>
                    <div className="privacy-details-section">
                      <strong>2. 수집하는 개인정보 항목</strong>
                      <p>• 필수 항목: 이름, 연락처(휴대폰 번호), 과정명</p>
                    </div>
                    <div className="privacy-details-section">
                      <strong>3. 개인정보의 보유 및 이용 기간</strong>
                      <p>수집 목적 달성 및 전형 종료 후 즉시 파기</p>
                      <p>단, 최종 선발자의 경우 교육 종료 및 사후 관리 기간까지 보유 및 이용합니다.</p>
                    </div>
                    <div className="privacy-details-section">
                      <strong>4. 개인정보 수집 거부에 관한 사항</strong>
                      <p>귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다.</p>
                      <p>단, 이용자가 개인정보 수집 동의 거부를 하였을 경우에는 교육 신청이 불가합니다.</p>
                    </div>
                  </div>
                )}

                {/* Row 6: Submit Button */}
                <button type="submit" className="apply-black-submit-btn" id="submitApplyForm">
                  <span>무료상담 신청하기</span>
                  <Send size={18} style={{ transform: 'rotate(-20deg)', marginLeft: '2px' }} />
                </button>

                {/* Row 7: Reassurance Note */}
                <p className="apply-form-footer-note">
                  개인정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {submittedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111a2e] border border-white/20 p-6 md:p-8 rounded-2xl max-w-md w-full shadow-2xl text-center">
            <div className="w-16 h-16 bg-blue-500/20 text-[#00d2ff] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00d2ff]/40">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">상담 신청이 접수되었습니다!</h3>
            <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed mb-6">
              {submittedMessage}
            </p>
            <button
              type="button"
              className="btn-pill-gradient w-full py-3 font-bold"
              onClick={() => setSubmittedMessage(null)}
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="company-name">메가존클라우드(주) | MBC아카데미 컴퓨터교육센터</div>
            <p>MEGAZONE CLOUD x MBC아카데미 컴퓨터교육센터 </p>
            <p>AI Campus · K-Digital Training | 교육문의 : <a href="tel:1877-5280" className="footer-tel-link" onClick={(e) => { if (window.innerWidth >= 768) e.preventDefault(); }}>1877-5280</a></p>
            <p>교육장소 : 과천 캠퍼스 (경기도 과천시 과천대로7길 74) | 역삼 캠퍼스 (서울 강남구 논현로85길 46)</p>
            <p>주관: 고용노동부 | 운영: 메가존클라우드 | 파트너: MBC아카데미 컴퓨터교육센터</p>
          </div>
        </div>
      </footer>

      {/* Circular Floating Consultation FAB Button (PC & Mobile) */}
      <a
        href="#apply"
        className="floating-consult-fab"
        title="빠른 상담신청"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById('apply');
          if (target) {
            if (window.innerWidth < 768) {
              const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition + 320;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            } else {
              target.scrollIntoView({ behavior: 'smooth' });
            }
            setTimeout(() => {
              const nameInput = document.getElementById('userName');
              if (nameInput) nameInput.focus({ preventScroll: true });
            }, 400);
          }
        }}
      >
        <span className="fab-ping-ring"></span>
        <span className="fab-ping-ring-outer"></span>
        <div className="fab-content">
          <MessageSquare size={22} className="fab-icon" />
          <span className="fab-text">상담신청</span>
        </div>
      </a>
    </div>
  );
}
