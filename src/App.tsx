import React, { useState } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, Check, PlayCircle, 
  MapPin, Monitor, Coins, Briefcase, Compass, Award, 
  ArrowRight, Shield, Database, Cloud, Cpu, Building, GraduationCap, Users
} from 'lucide-react';

// --- Data ---
const NAV_LINKS = [
  { name: 'AI 에이전트', href: '#agent' },
  { name: 'AI 아키텍트', href: '#architect' },
  { name: 'AI 보안', href: '#security' },
  { name: 'AI 데이터', href: '#data' },
  { name: 'FAQ', href: '#faq' },
];

const TRACKS = [
  { id: 'agent', name: 'AI 에이전트', desc: '엔지니어 양성과정' },
  { id: 'architect', name: 'AI 아키텍트', desc: '하이브리드 클라우드 기반 엔지니어 양성과정' },
  { id: 'security', name: 'AI 보안', desc: '하이브리드 클라우드 기반 엔지니어 양성과정' },
  { id: 'data', name: 'AI 데이터', desc: '하이브리드 클라우드 기반 엔지니어 양성과정' },
];

const FAQS = [
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
    a: '고용24(www.work24.go.kr) 또는 가까운 고용센터에서 신청할 수 있으며, 발급까지 통상 1~2주가 소요됩니다. 문의는 고용노동부 상담센터 1350으로 연락하시면 됩니다. 발급이 어려운 상황이라면 신청 시 상담을 통해 안내해 드립니다.'
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

const REVIEWS = [
  { text: '스스로 하고자 하는 의지만 있다면 짧은 시간에 빠르게 성장할 수 있는 과정입니다. 어려운 개념도 이해될 때까지 설명해주시는 강사님과 실무 시각에서 조언해주시는 멘토님 덕분에 6개월간 크게 성장했습니다.', name: '김○○', course: 'KDT 과정 수료' },
  { text: '학부에서는 개발 위주라 네트워크·인프라를 공부하기 어려웠는데, 이 과정을 수료하며 커리어 방향을 잡을 수 있었고 기대 이상으로 깊이 있게 배웠습니다. 다른 교육과 달리 실무 중심으로 설명해주셔서 배운 점과 느낀 점이 많았습니다.', name: '이○○', course: 'KDT 과정 수료' },
  { text: '실무에서 바로 활용 가능한 기술로 구성되어 매우 실질적이었습니다. 대부분 실습 위주라 몸에 익히기 좋았고, 끝까지 포기하지 않으면 분명히 성장한 자신을 확인할 수 있습니다.', name: '박○○', course: 'KDT 과정 수료' },
  { text: '여러 훈련과정을 거쳐봤지만 이만한 과정은 없었습니다. 클라우드에 관심이 있어 시작할 생각이라면 메가존을 적극 추천합니다. 대신 본인도 의지를 갖고 적극적으로 참여해야 합니다.', name: '최○○', course: 'KDT 과정 수료' },
  { text: '클라우드 업계에 입문할 수 있는 기초 지식과 여러 엔지니어링 베이스를 함께 공부할 수 있어 매우 의미 있는 교육이었습니다.', name: '정○○', course: 'KDT 과정 수료' },
  { text: '비전공자인 저도 6개월 동안 정말 많은 것을 배웠고, 후회 없는 선택이었습니다. 거의 매일 실습과 문서 작성을 병행하며 이 기술이 무엇이고 어떻게 활용했는지 스스로 돌아볼 수 있었고, 기술 습득을 넘어 기록하고 활용하는 방법까지 배우는 과정이었습니다.', name: '한○○', course: 'KDT 과정 수료' },
];

// --- Components ---

const AccordionItem = ({ question, answer }: { question: string, answer: string, key?: number | string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState('agent');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* --- Navbar --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-12 md:h-14">
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA4MTlfMjk1/MDAxNzg3MTIyNzg0OTU3.iQ2WNK36u5q6n_aD5Kqy18b4mVdHUPmkrVnHGmr8iYAg.3q4RGLCB7QM_7tAfB1ckdPT_QMO7gUx8cOof5AoySh0g.PNG/%EB%A9%94%EA%B0%80%EC%A1%B4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%EB%A1%9C%EA%B3%A0.png?type=w966"
                alt="Megazone Cloud Logo"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a href="#apply" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                교육 신청하기
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#apply" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                교육 신청하기
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* --- Hero Section --- */}
        <section className="relative pt-12 pb-32 overflow-hidden bg-gradient-to-br from-[#F5F7FF] via-[#EEF2FF] to-[#E0E7FF]">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-bl-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Hero Content */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E0E7FF] text-[#4F6AF0] text-sm font-bold mb-6 shadow-sm">
                  AI Campus · K-Digital Training · 고용노동부 국비지원
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#232F4B] leading-tight mb-6 tracking-tight">
                  2026 메가존클라우드<br/>
                  <span className="text-[#4F6AF0]">AI-Native 부트캠프</span>
                </h1>
                
                <div className="text-xl md:text-2xl text-[#3A4560] mb-8 font-bold leading-snug">
                  <p>AI로 ‘내 일’을 바꾸고, AI로 ‘내일’을 바꾸다.</p>
                  <p className="mt-1">전공 무관 · 교육비 0원 — 기업이 원하는 AI 엔지니어로, 6개월 만에.</p>
                </div>

                {/* Info Box */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
                  <div className="flex border-b border-gray-100">
                    <div className="w-28 flex-shrink-0 bg-[#232F4B] text-white font-bold flex items-center justify-center py-4">수강 과정</div>
                    <div className="flex-1 py-4 px-6 text-[#3A4560] font-medium">AI 에이전트 · AI 아키텍트 · AI 보안 · AI 데이터 <span className="text-[#232F4B] font-extrabold">4개 과정</span></div>
                  </div>
                  <div className="flex border-b border-gray-100">
                    <div className="w-28 flex-shrink-0 bg-[#232F4B] text-white font-bold flex items-center justify-center py-4">교육 기간</div>
                    <div className="flex-1 py-4 px-6 text-[#3A4560]"><strong className="text-[#232F4B] font-extrabold">984시간 · 약 6개월</strong> <span className="text-gray-500">(전 과정 공통 · 평일 09:00~18:00)</span></div>
                  </div>
                  <div className="flex border-b border-gray-100">
                    <div className="w-28 flex-shrink-0 bg-[#232F4B] text-white font-bold flex items-center justify-center py-4">교육 장소</div>
                    <div className="flex-1 py-4 px-6 text-[#3A4560]"><strong className="text-[#232F4B] font-extrabold">과천 캠퍼스</strong> <span className="text-gray-500">에이전트·아키텍트 /</span> <strong className="text-[#232F4B] font-extrabold">역삼 캠퍼스</strong> <span className="text-gray-500">보안·데이터</span></div>
                  </div>
                  <div className="flex">
                    <div className="w-28 flex-shrink-0 bg-[#232F4B] text-white font-bold flex items-center justify-center py-4">모집 기간</div>
                    <div className="flex-1 py-4 px-6 text-[#232F4B] font-extrabold">모집 중 · 2026년 9월 중 개강(과정별 상이)</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mb-8 font-medium">※ 개강 일정은 기관 내부 사정에 따라 일부 변동될 수 있습니다.</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#courses" className="inline-flex justify-center items-center px-10 py-4 bg-[#4F6AF0] text-white rounded-xl font-bold text-xl hover:bg-[#3d54c8] transition-colors shadow-lg shadow-blue-200/50">
                    과정별 살펴보기
                  </a>
                  <a href="#apply" className="inline-flex justify-center items-center px-10 py-4 bg-white text-[#232F4B] border border-gray-300 rounded-xl font-bold text-xl hover:bg-gray-50 transition-colors">
                    교육 신청하기
                  </a>
                </div>
              </div>

              {/* Hero Graphic */}
              <div className="hidden lg:block relative h-[500px]">
                {/* Abstract graphic representing AI/Cloud */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-blue-300/20 rounded-full blur-3xl animate-pulse z-0"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="animate-float-1 w-[22rem] h-[22rem] flex items-center justify-center relative z-0">
                    <img 
                      src="https://postfiles.pstatic.net/MjAyNjA4MTlfMjc4/MDAxNzg3MTI0NTY1MjAx.MEX2ZlXFDgltnB7dORzlJxH_BLBvh_UjqcpuzD-FcyYg.8Oc3vj2OhcQOBrJO027j9EspLD-chEOMmXxhXvR-6msg.PNG/%EB%A9%94%EA%B0%80%EC%A1%B4_%EB%B0%B0%EA%B2%BD%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%A0%9C%EA%B1%B0-Photoroom.png?type=w966"
                      alt="AI 부트캠프 그래픽"
                      className="w-full h-full object-contain drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Floating Tags */}
                  <div className="animate-float-2 absolute top-20 left-10 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 font-bold text-indigo-600 flex items-center gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> LLM · RAG
                  </div>
                  <div className="animate-float-3 absolute top-10 right-20 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 font-bold text-indigo-600 flex items-center gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> K8s · AWS
                  </div>
                  <div className="animate-float-4 absolute bottom-32 left-0 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 font-bold text-indigo-600 flex items-center gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> ZTNA · Security
                  </div>
                  <div className="animate-float-5 absolute bottom-20 right-10 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 font-bold text-indigo-600 flex items-center gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Spark · Kafka
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Benefits Bar --- */}
        <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="bg-indigo-900 rounded-2xl shadow-xl overflow-hidden">
             <div className="bg-indigo-800 text-center py-3">
               <span className="text-indigo-100 font-bold tracking-wider text-sm">수강생 전원 특별 혜택!</span>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-indigo-800 bg-white">
                <div className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-2xl">🪙</div>
                  <p className="font-bold text-gray-900 leading-snug">수강료 0원 +<br/>매월 훈련장려금 지급</p>
                </div>
                <div className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-2xl">🖥️</div>
                  <p className="font-bold text-gray-900 leading-snug">최고 사양 인프라<br/>무상 지원</p>
                </div>
                <div className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-2xl">🤝</div>
                  <p className="font-bold text-gray-900 leading-snug">메가존클라우드<br/>인턴십 & 채용 연계</p>
                </div>
                <div className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-2xl">🧭</div>
                  <p className="font-bold text-gray-900 leading-snug">현직 전문가의<br/>1:1 밀착 멘토링</p>
                </div>
                <div className="p-6 flex flex-col items-center text-center gap-3 col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-2xl">📜</div>
                  <p className="font-bold text-gray-900 leading-snug">AWS · GCP 공인 자격증<br/>바우처 100% 제공</p>
                </div>
             </div>
          </div>
        </section>

        {/* --- Problem & Why --- */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Problem & Why</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">왜 지금, AI 엔지니어인가</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                채용 시장의 기준이 바뀌고 있습니다. 지금 시작하는 사람이 그 기준을 먼저 충족합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="text-indigo-600 text-sm font-bold mb-4 bg-indigo-50 w-fit px-3 py-1 rounded-full">산업 트렌드</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">전 산업의 AI 전환이 시작됐습니다</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  기업들이 전 직무에 생성형 AI를 도입하면서, 'AI를 활용하는 인력'을 넘어 'AI 서비스를 만들고 운영하는 인력'에 대한 수요가 빠르게 커지고 있습니다.
                </p>
                <div className="mt-auto font-semibold text-indigo-700 bg-indigo-50/50 p-3 rounded-lg text-center text-sm">
                  AI 도입 기업 수 ↑ · AI 직무 채용 공고 ↑
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="text-blue-600 text-sm font-bold mb-4 bg-blue-50 w-fit px-3 py-1 rounded-full">채용 기준의 변화</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">IT 채용의 핵심 요구가 달라졌습니다</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  개발·인프라·보안·데이터 어떤 직무든, LLM 활용 경험과 클라우드 실무 역량이 채용 공고의 우대·필수 조건으로 이동하고 있습니다.
                </p>
                <div className="mt-auto font-semibold text-blue-700 bg-blue-50/50 p-3 rounded-lg text-center text-sm">
                  LLM · 클라우드 경험 = 신입의 새 기본기
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="text-purple-600 text-sm font-bold mb-4 bg-purple-50 w-fit px-3 py-1 rounded-full">지금이 적기</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">기업은 '프로젝트 경험'을 봅니다</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  이론만 배운 지원자와 현업 연계 프로젝트를 완주한 지원자의 격차는 큽니다. 984시간 실전형 커리큘럼과 300시간+ 프로젝트로 그 격차를 만들어 드립니다.
                </p>
                <div className="mt-auto font-semibold text-purple-700 bg-purple-50/50 p-3 rounded-lg text-center text-sm">
                  984시간 실전 커리큘럼 · 300시간+ 프로젝트
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4 Courses --- */}
        <section id="courses" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">4 Courses</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                지금 가장 주목받는 AI,<br/>나에게 맞는 과정을 선택하세요
              </h2>
              <p className="text-gray-500">별도 페이지 이동 없이 4개 과정의 개요와 커리큘럼을 한곳에서 비교할 수 있습니다.</p>
            </div>

            {/* Course Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {TRACKS.map((track, idx) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`text-left p-6 rounded-2xl border-2 transition-all ${
                    activeTrack === track.id 
                      ? 'border-indigo-600 bg-indigo-50/30 shadow-md ring-1 ring-indigo-600' 
                      : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-indigo-600 font-bold text-sm mb-2 block">TRACK 0{idx + 1}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{track.name}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{track.desc}</p>
                </button>
              ))}
            </div>

            {/* Course Details (Focusing on Track 1 as provided in text) */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-200/50">
              {activeTrack === 'agent' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                        Track 1. AI 에이전트 엔지니어 양성과정
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['LLM', 'RAG', 'AI Agent', 'Cloud Native'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 rounded-2xl p-6 lg:p-8 mb-12 border border-indigo-100">
                    <h4 className="text-indigo-800 font-bold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5" /> 교육 목표
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      LLM API와 RAG 기술을 서비스 로직에 결합하여 실전형 AI 에이전트 및 서비스를 개발할 수 있는 사용자 중심의 AI 애플리케이션 개발자를 양성합니다.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-6">커리큘럼 한눈에 보기</h4>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Step 1 */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 px-6 py-4 border-b border-gray-200">
                        <span className="text-slate-500 font-bold text-xs tracking-wider">STEP 1</span>
                        <h5 className="text-lg font-bold text-slate-800">기본</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          생성형 AI & 바이브 코딩 입문 (AIR Studio)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          Python · FastAPI 서버 구축 기초
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          Vector Store · 문서 청킹·임베딩
                        </li>
                      </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="border border-indigo-100 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-4">
                      <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                        <span className="text-indigo-500 font-bold text-xs tracking-wider">STEP 2</span>
                        <h5 className="text-lg font-bold text-indigo-900">심화</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          커서 AI 활용 MVP 프로토타이핑
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          하이브리드 검색 · Reranking 최적화
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          LangChain · Tool Calling 제어
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-8">
                      <div className="bg-blue-600 px-6 py-4 border-b border-blue-700">
                        <span className="text-blue-200 font-bold text-xs tracking-wider">STEP 3</span>
                        <h5 className="text-lg font-bold text-white">전문</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          AI 에이전트 풀스택 웹 개발
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          LangGraph 복합 상태 제어 · ReAct
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          멀티 에이전트 협업 · K8s 배포
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-gray-500" /> 대표 프로젝트
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-indigo-700">Vibe Coding MVP 서비스 개발 · 기업용 AI 에이전트 플랫폼 구축</span>(업무 자동화 비서, 고객 지원 티켓 자동 응대, 채용 서류 검토 에이전트) — 실제 동작하는 에이전트 포트폴리오 완성이 목표입니다.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-bold text-gray-900 mb-3 text-sm">수료 후 취업 진출 분야</h5>
                    <div className="flex flex-wrap gap-2">
                      {['#AI 엔지니어', '#주니어 ML 엔지니어', '#LLM 애플리케이션 엔지니어', '#RAG·Agentic AI 엔지니어', '#AI 응용 서비스 개발자'].map(tag => (
                        <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                      교육 신청하기
                    </a>
                    <button className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2">
                      과정 상세 보기 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Track 2. 하이브리드 클라우드 기반 AI 아키텍트 엔지니어 양성과정 */}
              {activeTrack === 'architect' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                        Track 2. 하이브리드 클라우드 기반 AI 아키텍트 엔지니어 양성과정
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['Linux', 'Kubernetes', 'AWS', 'Terraform', 'MLOps'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 rounded-2xl p-6 lg:p-8 mb-12 border border-indigo-100">
                    <h4 className="text-indigo-800 font-bold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5" /> 교육 목표
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      비전공자 및 초급자를 대상으로 리눅스 기초부터 생성형 AI 서비스 운영까지 아우르는 AI 인프라 전문가를 양성합니다. GPU 기반 컨테이너 환경 구축, 벡터 DB 및 AWS 클라우드 아키텍처 설계, 인프라 자동화(IaC) 실습을 통해 실무에 즉시 적용 가능한 MLOps 핵심 역량을 습득합니다.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-6">커리큘럼 한눈에 보기</h4>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Step 1 */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 px-6 py-4 border-b border-gray-200">
                        <span className="text-slate-500 font-bold text-xs tracking-wider">STEP 1</span>
                        <h5 className="text-lg font-bold text-slate-800">기본</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          TCP/IP · 네트워크 경계 설계
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          리눅스 시스템 · 쉘 스크립트 자동화
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          Conda · Python LLM 서빙 기초
                        </li>
                      </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="border border-indigo-100 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-4">
                      <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                        <span className="text-indigo-500 font-bold text-xs tracking-wider">STEP 2</span>
                        <h5 className="text-lg font-bold text-indigo-900">심화</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          Docker 이미지 최적화 · 리소스 격리
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          Kubernetes 클러스터 · GPU 스케줄링
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          AWS VPC · EC2·S3 아키텍처
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-8">
                      <div className="bg-blue-600 px-6 py-4 border-b border-blue-700">
                        <span className="text-blue-200 font-bold text-xs tracking-wider">STEP 3</span>
                        <h5 className="text-lg font-bold text-white">전문</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          AWS GPU 인스턴스 · SageMaker 연계
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          Terraform 기반 IaC 자동화
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          GitLab CI/CD · 모니터링 통합
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-gray-500" /> 대표 프로젝트
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-indigo-700">AI Cloud Project</span> — 금융·공공 기관용 폐쇄형 AI 검색 시스템, 대규모 트래픽 대응 AI 추천 시스템, 스마트 팩토리 예지보전 모니터링, SaaS형 AI 문서 요약·번역 플랫폼 중 팀별 선택 구축.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-bold text-gray-900 mb-3 text-sm">수료 후 취업 진출 분야</h5>
                    <div className="flex flex-wrap gap-2">
                      {['#클라우드 엔지니어', '#AI 인프라 엔지니어', '#MLOps 엔지니어', '#DevOps 엔지니어', '#주니어 솔루션 아키텍트'].map(tag => (
                        <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                      교육 신청하기
                    </a>
                    <button className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2">
                      과정 상세 보기 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Track 3. 하이브리드 클라우드 기반 AI 보안 엔지니어 양성과정 */}
              {activeTrack === 'security' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                        Track 3. 하이브리드 클라우드 기반 AI 보안 엔지니어 양성과정
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['ZTNA', 'AI-SOAR', 'LLM Security', 'Cloud Defense'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 rounded-2xl p-6 lg:p-8 mb-12 border border-indigo-100">
                    <h4 className="text-indigo-800 font-bold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5" /> 교육 목표
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      AI 리터러시를 선행하여 비전공자도 보안 스크립트를 개발할 수 있는 역량을 기르고, 온프레미스 폐쇄망 보안(Private AI Security)과 하이브리드 클라우드 보안, AI-SOAR 자동화 관제 기술을 습득시켜 실전형 AI 보안 엔지니어 및 클라우드 보안 아키텍트를 양성합니다.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-6">커리큘럼 한눈에 보기</h4>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Step 1 */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 px-6 py-4 border-b border-gray-200">
                        <span className="text-slate-500 font-bold text-xs tracking-wider">STEP 1</span>
                        <h5 className="text-lg font-bold text-slate-800">기본</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          Cisco 3계층 설계 · VPN 터널링
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          Nmap · Wireshark 취약점 분석
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          AWS VPC 보안 그룹 · 가상 인프라
                        </li>
                      </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="border border-indigo-100 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-4">
                      <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                        <span className="text-indigo-500 font-bold text-xs tracking-wider">STEP 2</span>
                        <h5 className="text-lg font-bold text-indigo-900">심화</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          NGFW 정책 · 지능형 위협 차단
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          ELK 기반 SIEM 관제 · 이상 탐지
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          Transit Gateway · ZTNA 구현
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-8">
                      <div className="bg-blue-600 px-6 py-4 border-b border-blue-700">
                        <span className="text-blue-200 font-bold text-xs tracking-wider">STEP 3</span>
                        <h5 className="text-lg font-bold text-white">전문</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          OWASP LLM Top 10 · 가드레일 설계
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          RAG 데이터 오염 방지 · 벡터 DB 암호화
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          GuardDuty 연동 · AI-SOAR 구축
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-gray-500" /> 대표 프로젝트
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-indigo-700">Secure Cloud & AI Project</span> — ZTNA 기반 하이브리드 보안 네트워크 구축, Secure RAG 사내 지식 검색 봇, LLM 가드레일·환각 제어 거버넌스, AI-SOAR 기반 지능형 보안 관제 자동화.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-bold text-gray-900 mb-3 text-sm">수료 후 취업 진출 분야</h5>
                    <div className="flex flex-wrap gap-2">
                      {['#보안 엔지니어', '#클라우드 보안 엔지니어', '#보안 관제(SOC) 전문가', '#주니어 AI 보안 아키텍트'].map(tag => (
                        <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                      교육 신청하기
                    </a>
                    <button className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2">
                      과정 상세 보기 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Track 4. 하이브리드 클라우드 기반 AI 데이터 엔지니어 양성과정 */}
              {activeTrack === 'data' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                        Track 4. 하이브리드 클라우드 기반 AI 데이터 엔지니어 양성과정
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['SQL', 'Spark', 'Kafka', 'Airflow', 'Data Pipeline'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-md border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 rounded-2xl p-6 lg:p-8 mb-12 border border-indigo-100">
                    <h4 className="text-indigo-800 font-bold mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5" /> 교육 목표
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      SQL·Spark·Kafka·Airflow 기반 End-to-End 데이터 파이프라인을 다루는 데이터 엔지니어로 성장합니다. 대규모 데이터의 수집, 처리, 저장부터 AI 모델 학습을 위한 데이터 제공까지 전체 흐름을 자동화하고 최적화하는 역량을 습득합니다.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-6">커리큘럼 한눈에 보기</h4>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {/* Step 1 */}
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100 px-6 py-4 border-b border-gray-200">
                        <span className="text-slate-500 font-bold text-xs tracking-wider">STEP 1</span>
                        <h5 className="text-lg font-bold text-slate-800">기본</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          SQL 심화 · RDBMS 데이터 모델링
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          Python 데이터 전처리 (Pandas, NumPy)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0"></span>
                          AWS S3 · 클라우드 데이터 스토리지 기초
                        </li>
                      </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="border border-indigo-100 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-4">
                      <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
                        <span className="text-indigo-500 font-bold text-xs tracking-wider">STEP 2</span>
                        <h5 className="text-lg font-bold text-indigo-900">심화</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          Hadoop 에코시스템 · Spark 분산 처리
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          Kafka 실시간 스트리밍 데이터 수집
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                          Data Warehouse (AWS Redshift) 구축
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm relative top-0 md:top-8">
                      <div className="bg-blue-600 px-6 py-4 border-b border-blue-700">
                        <span className="text-blue-200 font-bold text-xs tracking-wider">STEP 3</span>
                        <h5 className="text-lg font-bold text-white">전문</h5>
                      </div>
                      <ul className="p-6 space-y-4 text-gray-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          Airflow 워크플로우 스케줄링·자동화
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          데이터 파이프라인 CI/CD 통합
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                          AI 모델 학습용 Feature Store 연동
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-gray-500" /> 대표 프로젝트
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-semibold text-indigo-700">Data Pipeline Project</span> — E-commerce 실시간 로그 분석 파이프라인, 금융 이상 거래 탐지(FDS) 스트리밍 처리, LLM 학습을 위한 대규모 말뭉치(Corpus) 전처리 및 벡터화 파이프라인 구축.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-bold text-gray-900 mb-3 text-sm">수료 후 취업 진출 분야</h5>
                    <div className="flex flex-wrap gap-2">
                      {['#데이터 엔지니어', '#빅데이터 플랫폼 엔지니어', '#클라우드 데이터 엔지니어', '#데이터 아키텍트'].map(tag => (
                        <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors">
                      교육 신청하기
                    </a>
                    <button className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2">
                      과정 상세 보기 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* --- Learning Journey --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Learning Journey</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                기초부터 취업까지,<br/>현업형 실무 역량을 완성하는 6단계
              </h2>
              <p className="text-lg text-gray-600">모든 과정은 공통 AI 기초에서 출발해 현업 연계 프로젝트와 취업 지원으로 이어집니다.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { step: 1, title: '공통 AI 기초', desc: 'AI Foundation · Prompt Engineering 등 공통 기초를 다집니다.' },
                { step: 2, title: '바이브 코딩 & 미니 프로젝트', desc: 'Vibe Coding으로 도구 활용을 익히고 미니 프로젝트를 수행합니다.' },
                { step: 3, title: '전공 심화 이론·실습', desc: '과정별 핵심 기술을 현업 수준까지 깊게 학습합니다.' },
                { step: 4, title: '실무 프로젝트', desc: '실제 비즈니스 시나리오로 팀 단위 프로젝트를 진행합니다.' },
                { step: 5, title: '현업 연계 프로젝트 & 품평회', desc: '기업 주제 종합 프로젝트와 품평회로 우수팀을 선정합니다.' },
                { step: 6, title: '취업 지원 & 채용 연계', desc: '포트폴리오·면접 대비로 취업까지 연결합니다.' }
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
                  <div className="text-indigo-200 font-black text-6xl absolute top-4 right-4 opacity-30 pointer-events-none">0{item.step}</div>
                  <span className="text-indigo-600 font-bold text-sm mb-2 block relative z-10">STEP {item.step}</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{item.title}</h4>
                  <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">입과부터 수료까지, 6개월 학습 로드맵</h3>
            <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg">
              {[
                { month: 'MONTH 1', title: '공통 AI 기초 ·\n바이브 코딩', bg: 'bg-indigo-900 text-white' },
                { month: 'MONTH 2–3', title: '전공 심화\n이론 · 실습', bg: 'bg-indigo-800 text-indigo-50' },
                { month: 'MONTH 4', title: '실무 프로젝트\n착수', bg: 'bg-indigo-700 text-indigo-50' },
                { month: 'MONTH 5', title: '현업 연계 프로젝트\n& 품평회', bg: 'bg-indigo-600 text-white' },
                { month: 'MONTH 6', title: '수료 · 취업지원\n채용 연계', bg: 'bg-blue-600 text-white' }
              ].map((item, idx) => (
                <div key={idx} className={`flex-1 p-6 ${item.bg} flex flex-col justify-between min-h-[160px] border-r border-white/10 last:border-0`}>
                  <span className="text-xs font-bold tracking-widest opacity-70 mb-4">{item.month}</span>
                  <h4 className="font-bold text-lg whitespace-pre-line">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Megazone --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Why Megazone</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">메가존클라우드라서 가능한 것</h2>
              <p className="text-lg text-gray-600">교육기관이 아닌, 국내 1위 클라우드 기업이 직접 설계하고 가르치는 과정입니다.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: '국내 1위', sub: 'MSP 메가존클라우드', desc: '클라우드 관리 서비스 국내 선두 기업이 커리큘럼 설계부터 멘토링까지 직접 참여합니다.' },
                { title: '20+', sub: '메가존 그룹 자회사', desc: '그룹사·파트너 네트워크와 연계한 TECH BRIDGE 채용 프로그램을 운영합니다.' },
                { title: '300명+', sub: '연간 신규 채용 규모', desc: '메가존 그룹의 채용 규모와 직결된 인턴십 · 채용 Pool에 우수 수료생을 등록합니다.' },
                { title: '300시간+', sub: '실무 프로젝트', desc: '전체 984시간 중 300시간 이상을 현업 시나리오 기반 프로젝트에 투입합니다.' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
                  <h3 className="text-4xl font-black text-indigo-600 mb-2">{stat.title}</h3>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{stat.sub}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">수강생 수 · 취업률 · 만족도 등 성과 수치는 1기 운영 후 실측 데이터로 업데이트됩니다.</p>
          </div>
        </section>

        {/* --- Partners --- */}
        <section className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Partners</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">글로벌 파트너 생태계 안에서 배웁니다</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              국내 최초 AWS 공식 파트너 메가존클라우드 — 글로벌 CSP·솔루션 기업들과의 협업 생태계가<br/>교육 콘텐츠와 취업 연계의 든든한 기반이 됩니다.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { label: 'CSP 파트너', count: '12+' },
                { label: 'AI · Data 파트너', count: '27+' },
                { label: '비즈니스 솔루션 파트너', count: '37+' },
                { label: '테크 파운데이션 파트너', count: '79+' },
                { label: 'ISV 파트너', count: '150+' },
              ].map(item => (
                <div key={item.label} className="bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm text-sm font-semibold text-gray-700">
                  {item.label} <span className="text-indigo-600 ml-1">{item.count}</span>
                </div>
              ))}
            </div>

            {/* Placeholder for Partner Logos - styling as text blocks for this context */}
            <div className="space-y-16">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">CSP Partners</h3>
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-2xl font-black text-gray-800">AWS</span>
                  <span className="text-2xl font-black text-gray-800">Google Cloud</span>
                  <span className="text-2xl font-black text-gray-800">Microsoft Azure</span>
                  <span className="text-2xl font-black text-gray-800">Oracle</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Tech & Solution Partners</h3>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 text-xl font-bold text-gray-400">
                   <span>NVIDIA</span> <span>Databricks</span> <span>Snowflake</span> <span>Datadog</span>
                   <span>Elastic</span> <span>Red Hat</span> <span>MongoDB</span> <span>Confluent</span>
                </div>
              </div>
            </div>

            <div className="mt-16">
               <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800">
                 메가존클라우드 파트너 생태계 자세히 보기 <ArrowRight className="w-4 h-4" />
               </a>
            </div>
          </div>
        </section>

        {/* --- Benefit --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Benefit</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">훈련생 혜택</h2>
              <p className="text-lg text-gray-600">메가존클라우드 AI-Native 부트캠프 1기 한정 혜택 — 교육에만 집중할 수 있도록 전 과정을 지원합니다.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Briefcase/>, title: '채용 연계 기회', sub: '인턴십 우선 선발 & 채용 Pool 등록', desc: '메가존클라우드 · 관계사 · 주요 파트너사 인턴십 우선 선발, 전용 채용 프리패스 Pool 등록' },
                { icon: <Coins/>, title: '교육비 0원', sub: '수강료 전액 지원 & 훈련장려금', desc: '고용노동부 전액 지원 교육비 0원 + 매월 최대 40만 원 훈련장려금 지급' },
                { icon: <Monitor/>, title: '장비·인프라 지원', sub: '노트북 & 고성능 인프라 지원', desc: '1인 1노트북, 최고 사양 서버·클라우드 인프라와 최신 AI 솔루션 무상 지원' },
                { icon: <Award/>, title: '자격증 지원', sub: '공인 자격증 바우처 100% 제공', desc: 'AWS · GCP 등 클라우드 공인 자격증 응시 바우처 전액 지원' },
                { icon: <Compass/>, title: '현직자 밀착 가이드', sub: '메가존 AI·클라우드 현직자 멘토링', desc: '아키텍처 설계부터 실전 코드 리뷰까지 현업 전문가의 실무 밀착 지도' },
                { icon: <GraduationCap/>, title: '웰컴키트 & 수료증', sub: '프리미엄 웰컴키트 & 공식 수료증', desc: '웰컴키트 지급, 메가존클라우드 명의의 공식 수료증 수여' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7' })}
                  </div>
                  <div className="text-xs font-bold text-indigo-600 mb-2 bg-indigo-50 inline-block px-2 py-1 rounded">{item.title}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.sub}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Career --- */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Career</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                서류부터 면접까지,<br/>메가존클라우드 취업지원 솔루션
              </h2>
              <p className="text-lg text-gray-600">1:1 심층 코칭부터 채용 연계까지, 수료 후 180일 사후 관리로 이어집니다.</p>
            </div>

            {/* Tech Bridge Program */}
            <div className="bg-indigo-900 rounded-3xl p-8 md:p-12 mb-16 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/3">
                  <div className="text-cyan-400 font-extrabold text-sm tracking-widest mb-4">MEGAZONE TECH BRIDGE PROGRAM</div>
                  <h3 className="text-3xl font-extrabold mb-4">
                    메가존 그룹 20+ 자회사<br/>
                    <span className="text-cyan-300">연간 300명+ 신규 채용 네트워크</span>
                  </h3>
                  <p className="text-indigo-100 mb-6">
                    교육 성과가 채용으로 이어지도록 설계된 메가존만의 취업 연계 트랙입니다. 인증된 우수 수료생을 메가존 그룹과 파트너사의 채용 포지션에 직접 연결합니다.
                  </p>
                  <div className="bg-gradient-to-r from-amber-500/25 via-indigo-900/80 to-amber-500/15 rounded-xl p-5 border-2 border-amber-400/80 shadow-xl shadow-amber-500/10 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                    {/* Shimmer effect on hover */}
                    <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="font-extrabold text-amber-300 mb-2 flex items-center gap-2 text-base relative z-10">
                      <Award className="w-5 h-5 text-amber-300 animate-bounce" /> 
                      <span>우수 수료생 특전</span>
                      <span className="ml-auto text-[10px] bg-amber-400 text-indigo-950 font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">Special</span>
                    </div>
                    <div className="text-sm text-amber-100 font-semibold leading-relaxed relative z-10">
                      서류 전형 면제 · 인턴십 연계 · 그룹사 및 파트너사 채용 기회 우선 제공
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                  {[
                    { step: '1 · 선발', title: '사업부 리더가 면접 직접 참여', desc: '채용 예정 사업부의 리더가 선발 단계부터 직접 훈련생을 평가합니다.' },
                    { step: '2 · 교육', title: '현직자 멘토 배치 · 최적 팀 매칭', desc: '누적 학습 데이터 기반 개인별 직무 분석으로 최적의 팀과 멘토를 매칭합니다.' },
                    { step: '3 · 인증', title: 'MTP 인증 등급 부여', desc: '출결·역량 달성률·프로젝트 품평회 결과를 종합해 인증 등급을 산출합니다.' },
                    { step: '4 · 채용', title: '등급별 채용 연계 혜택', desc: '우수 수료생은 서류 면제·인턴십 등 메가존얼라이언스 채용 전형에 직접 연결됩니다.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="bg-cyan-400 text-indigo-950 font-extrabold px-2.5 py-0.5 rounded text-xs inline-block mb-3 shadow-sm">STEP {item.step}</div>
                      <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                      <p className="text-indigo-100 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: '1', title: 'IT 채용 트렌드 & 취업특강', desc: 'IT·클라우드 업계 최신 채용 트렌드, 직무별 핵심 역량(Tech Stack) 분석과 취업 준비 방향 제시' },
                { num: '2', title: '1:1 이력서·자기소개서 코칭', desc: '개인별 프로젝트 경험과 강점을 분석해 최적의 이력서·자소서 완성까지 1:1 밀착 지도' },
                { num: '3', title: '실전 대비 1:1 모의면접 훈련', desc: '현직 실무자 출신 코치와 실전형 모의면접 시뮬레이션 진행, 실시간 피드백 제공' },
              ].map(item => (
                <div key={item.num} className="bg-white p-8 rounded-2xl border border-gray-200 text-center shadow-sm">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md">{item.num}</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm font-medium text-gray-500 bg-gray-100 py-3 rounded-lg border border-gray-200">
              수료 후에도 <strong className="text-indigo-600">D+180 사후 관리</strong> — 미취업자 대상 맞춤 채용 정보 제공 · 재매칭 서비스 · 취업 현황 추적 관리
            </div>
          </div>
        </section>

        {/* --- Reviews --- */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-400 font-bold tracking-widest text-sm mb-2 block uppercase">Reviews</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">수강생의 목소리</h2>
              <p className="text-lg text-slate-400">메가존 교육과정을 먼저 경험한 수료생들의 이야기를 직접 들어보세요.</p>
            </div>

            <div className="bg-indigo-600 rounded-2xl p-6 text-center mb-16 max-w-3xl mx-auto shadow-xl shadow-indigo-900/50">
              <p className="text-xl font-medium">
                메가존클라우드 훈련과정을 수료한 수료생 중 <strong className="text-3xl font-black text-yellow-300 mx-2">90명</strong>이 메가존클라우드에 입사했습니다.
              </p>
            </div>

            {/* Video Interview Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
                <div className="relative aspect-video bg-black">
                  <video 
                    controls 
                    preload="metadata" 
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://training.megazone.com/ai-campus/vid/interview1.mp4"
                  />
                </div>
                <div className="p-6 bg-white flex flex-col justify-between flex-grow text-left">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-4">김O한 수료생 인터뷰</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-lg">
                      # 수료생 인터뷰
                    </span>
                    <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-lg">
                      # 교육 후기
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
                <div className="relative aspect-video bg-black">
                  <video 
                    controls 
                    preload="metadata" 
                    playsInline
                    className="w-full h-full object-cover"
                    src="https://training.megazone.com/ai-campus/vid/interview2.mp4"
                  />
                </div>
                <div className="p-6 bg-white flex flex-col justify-between flex-grow text-left">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-4">이O진 수료생 인터뷰</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-lg">
                      # 수료생 인터뷰
                    </span>
                    <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 font-bold text-xs rounded-lg">
                      # 성장 스토리
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Reviews Continuous Marquee Slider */}
            <div className="relative w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
              {/* Left and Right Fade Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

              <div className="animate-marquee flex gap-6">
                {[...REVIEWS, ...REVIEWS].map((review, idx) => (
                  <div 
                    key={idx} 
                    className="w-[340px] sm:w-[380px] shrink-0 bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 flex flex-col justify-between hover:border-slate-500 hover:bg-slate-800/90 transition-all text-left shadow-lg"
                  >
                    <div className="flex text-yellow-400 mb-4">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-normal whitespace-normal">"{review.text}"</p>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-700/60">
                      <div className="w-10 h-10 bg-indigo-600/30 border border-indigo-500/40 rounded-full flex items-center justify-center font-bold text-indigo-300 shrink-0">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{review.name}</div>
                        <div className="text-xs text-slate-400">{review.course}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-xs text-slate-500 mt-8">기존 운영 K-디지털 트레이닝 과정 수강평(고용24 등록 후기) 기준</p>
          </div>
        </section>

        {/* --- Who --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Who</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">이런 분께 추천합니다</h2>
            <p className="text-lg text-gray-600 mb-16">전공·경력과 무관하게, AI 엔지니어로 성장하고 싶은 분이라면 누구나 시작할 수 있습니다.</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-12">
              {[
                { id: '01', title: 'IT/AI 직무 취업을 준비하는 분', desc: '실무 프로젝트 중심 커리큘럼으로 취업 포트폴리오를 완성합니다.' },
                { id: '02', title: '이공계 졸업(예정)으로 AI 직무 전환을 준비하는 분', desc: '기존 전공 지식을 살려 AI·클라우드 직무로 커리어를 확장합니다.' },
                { id: '03', title: '비전공이지만 AI에 도전하려는 분', desc: '코딩·IT 기초 경험이 있다면 공통 기초 과정으로 따라올 수 있습니다.' },
                { id: '04', title: '기초부터 탄탄히 실무 역량을 쌓고 싶은 분', desc: '개념 학습부터 현업형 프로젝트까지 단계별로 완주합니다.' },
              ].map(item => (
                <div key={item.id} className="bg-gray-50 p-8 rounded-2xl flex gap-6 items-start">
                  <div className="text-indigo-200 font-black text-4xl">{item.id}</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center gap-2 mx-auto">
              🔍 나에게 맞는 트랙 찾기 — AI 커리어 진단 테스트
            </button>
          </div>
        </section>

        {/* --- Process --- */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Process</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">지원 안내</h2>
              <p className="text-lg text-gray-600">신청서 접수 후 평가·발표 일정은 개별 안내드립니다.</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {/* Requirements */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-indigo-600" /> 지원 자격
                </h3>
                <ul className="space-y-4 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                    학력 및 전공 무관
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                    국민내일배움카드 보유자 또는 신규 발급 가능자 (발급 문의: 고용노동부 1350)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                    교육 기간 동안 전일 오프라인 참여 및 수료 후 취업이 가능하신 분
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                    졸업 요건을 충족한 졸업(예정)자 및 미취업자 (재직자는 교육 시작 전 퇴직 처리 필수)
                  </li>
                </ul>
              </div>

              {/* Steps */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
                <h3 className="font-bold text-xl text-gray-900 mb-8 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-600" /> 지원 절차
                </h3>
                
                <div className="flex flex-col sm:flex-row justify-between gap-4 relative">
                  {/* Progress Line */}
                  <div className="hidden sm:block absolute top-6 left-10 right-10 h-0.5 bg-gray-100 z-0"></div>
                  
                  {[
                    { step: '1', title: '신청서 작성', sub: '지금 접수 중', active: true },
                    { step: '2', title: '역량 및 면접 평가', sub: '개별 안내 예정' },
                    { step: '3', title: '합격자 발표', sub: '일정 추후 공지' },
                    { step: '4', title: '최종 입과', sub: '9월 중 개강' },
                  ].map((s, idx) => (
                    <div key={idx} className="relative z-10 flex flex-row sm:flex-col items-center gap-4 sm:gap-3 text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors flex-shrink-0 ${s.active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 ring-4 ring-white' : 'bg-gray-100 text-gray-400 ring-4 ring-white'}`}>
                        {s.step}
                      </div>
                      <div className="text-left sm:text-center">
                        <div className={`font-bold text-sm ${s.active ? 'text-indigo-600' : 'text-gray-900'}`}>{s.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-8">※ 과정 신청 시 지원 동기와 무관한 내용 또는 허위사실·비방·욕설을 작성할 경우 별도 안내 없이 참여가 제한됩니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Location --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Location</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">오시는 길 · 교육장소</h2>
              <p className="text-lg text-gray-600">두 곳의 메가존클라우드 캠퍼스에서 과정별로 진행됩니다.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Campus 1 */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-200 relative flex items-center justify-center">
                  <Building className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">TRACK 01 에이전트</span>
                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">TRACK 02 아키텍트</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">과천 캠퍼스</h3>
                  <p className="text-gray-600 font-medium mb-4">과천 메가존클라우드 2층 교육장</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-6">
                    <MapPin className="w-4 h-4" /> 경기도 과천시 과천대로7길 74
                  </p>
                  <a href="#" className="inline-block border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                    지도에서 보기
                  </a>
                </div>
              </div>

              {/* Campus 2 */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-200 relative flex items-center justify-center">
                  <Building className="w-16 h-16 text-gray-400" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">TRACK 03 보안</span>
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">TRACK 04 데이터</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">역삼 캠퍼스</h3>
                  <p className="text-gray-600 font-medium mb-4">역삼 메가존클라우드 2층 교육장</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-6">
                    <MapPin className="w-4 h-4" /> 서울 강남구 논현로85길 46
                  </p>
                  <a href="#" className="inline-block border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                    지도에서 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">자주 묻는 질문</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-6 divide-y divide-gray-100">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* --- Footer CTA Banner --- */}
        <section className="bg-indigo-900 py-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgydjRoMnY0aC0ydjRoLTJ2LTRoLTJ2LTRoMnoiIGZpbGw9IiM0ZjQ2ZTUiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
           <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">지금, AI 취업에 도전하세요</h2>
             <p className="text-indigo-200 text-lg mb-10">과정별 20명 내외 — 신청서 접수 순으로 입과 평가가 진행됩니다.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="#apply" className="px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg">
                 교육 신청하기
               </a>
               <a href="#brochure" className="px-8 py-4 bg-indigo-800 text-white rounded-xl border border-indigo-700 font-bold text-lg hover:bg-indigo-700 transition-colors">
                 교육 프로그램 보기
               </a>
             </div>
           </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="font-bold text-xl leading-none text-gray-900">
                  MEGAZONE<br/><span className="text-gray-500 text-sm">CLOUD</span>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-sm font-medium text-gray-600">MBC아카데미<br/>컴퓨터교육센터</div>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                MEGAZONE CLOUD x MBC아카데미 컴퓨터교육센터<br/>
                AI Campus · K-Digital Training
              </p>
              <p className="text-xs text-gray-500">
                주관: 고용노동부 | 운영: 메가존클라우드 | 파트너: MBC아카데미 컴퓨터교육센터
              </p>
            </div>
            
            <div className="text-sm text-gray-600 text-left md:text-right">
              <p className="mb-1 font-medium text-gray-900">교육장소</p>
              <p className="mb-4 text-xs text-gray-500">
                과천 캠퍼스 (경기도 과천시 과천대로7길 74)<br/>
                역삼 캠퍼스 (서울 강남구 논현로85길 46)
              </p>
              <p className="mb-1 font-medium text-gray-900">문의</p>
              <p className="text-xs font-bold text-indigo-600">02-2109-2545 · mzcedu@megazone.com</p>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Mobile Sticky Bottom CTA --- */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 md:hidden z-50">
        <a href="#apply" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg">
          나에게 맞는 트랙 찾기 — 교육 신청하기
        </a>
      </div>

    </div>
  );
}
