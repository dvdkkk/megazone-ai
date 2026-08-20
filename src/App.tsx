import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Check, PlayCircle, 
  MapPin, Monitor, Coins, Briefcase, Compass, Award, 
  ArrowRight, Shield, Database, Cloud, Cpu, Building, GraduationCap, Users,
  Phone, Send
} from 'lucide-react';

// --- Scroll Reveal Helper Component ---
const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Data ---
const NAV_LINKS = [
  { name: 'AI 에이전트', href: 'https://megazone-ai-01.vercel.app' },
  { name: 'AI 아키텍트', href: 'https://megazone-ai-02.vercel.app' },
  { name: 'AI 보안', href: 'https://megazone-ai-03.vercel.app' },
  { name: 'AI 데이터', href: 'https://megazone-ai-04.vercel.app' },
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

const GWACHEON_IMAGES = [
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjg5/MDAxNzg3MTg3NzQ5NDYy.aYguuDJVlzdi4ShU-AoVP2aX4ianE_HrV8jsUlUwS3cg.ov-LuLqPI4KAe5dG0nxrCDpYOiOeuOQf-1xjzoz8GWsg.JPEG/KakaoTalk_20260819_191135989_20.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTI1/MDAxNzg3MTg3NzQ5NTM3.8Ow0fR29b5VVFEBO9oSlv9jc0pTFE5RNBzVv-qxS3hgg.345JJB8Z1JwoB3Kgcgc2AmSyEXBzwPLsiJCGG1wjxiMg.JPEG/KakaoTalk_20260819_191135989_21.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTg5/MDAxNzg3MTg3NzQ2Nzg1.kzaCx6TA6r7VQor5wMe565EzE7yqqyRmj0f6EGFrCwAg.AMWSBXt5AyaUyiZkK8IE9SrniPpJ3LjjEpPoSmZaHGog.JPEG/KakaoTalk_20260819_191135989_15.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTM4/MDAxNzg3MTg3NzQ2OTcw.xRUoNVgFdTks8jl-bAxm9Gm919-7JYtNzdFgkLg7lY8g.h3XpSUSV_Odmntoc0lGfsbG3GLSb4QFd3w_SvNcBX20g.JPEG/KakaoTalk_20260819_191135989_16.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMyAg/MDAxNzg3MTg3NzQ3MDUz.ce9GHg0-SM-a0lqk-ueI76u1L8teqXj-MDR2mn_PBmEg._YfW_BWQzCMDzlx1KHrT8lwDoF7_02ocN1uHX0lP65Ug.JPEG/KakaoTalk_20260819_191135989_18.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfOTMg/MDAxNzg3MTg3NzQ3MDM4.TZTGW0Q_YeiYyQWHQ5M3VwyLby2wFftm5PG3dIEdaEEg.cBqE6v5SzgI0oa9dcYL4u9SB-M6My5LdELEb99VH5Ncg.JPEG/KakaoTalk_20260819_191135989_17.jpg?type=w966"
];

const FALLBACK_CAMPUS_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
];





const YEOKSAM_IMAGES = [
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjY0/MDAxNzg3MTg3NzQ1ODk0.CM9g9N3rx_yedA9vWqHIO_ve15SqVgM5I37Qjy6mb90g.UTiz6496GI9uElhIg2WtlDSvR0UYEnsfKzsgFZtKR3Mg.JPEG/KakaoTalk_20260819_191135989.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTc5/MDAxNzg3MTg3NzQ4MjY4.9GTLNBMiVMY-oG-yzKf2mEYowPaI1xIRCeZIk9MLFMcg.UIT7AzlYNpxugUsmW61ud018NSoHqMfFoeRxxIGWJ3cg.JPEG/KakaoTalk_20260819_191135989_02.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjcy/MDAxNzg3MTg3NzQ4MzU2.JsRSmoSkCCfeeFI7G6PLWngXTJTePT4UMv_f4JYd6vMg.8YVJVD5kBE-UKJxE13pT0yNxOexvdKacvUpTP8LFcLEg.JPEG/KakaoTalk_20260819_191135989_03.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTU2/MDAxNzg3MTg3NzQ4NDI3.HIYw-up2DQTQfiNy5llQxzlBvWsvYBYxD0Y9J1HHZJYg.erakYftx1txaHsdIjlkPvnsto6OvyzuiEdrmb8wl0ccg.JPEG/KakaoTalk_20260819_191135989_04.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTUx/MDAxNzg3MTg3NzQ4OTMx.49PwR_8Vg9RNQJvrxLGNnJAEq_OkDZ_U_3jKcbSr2f4g.2ZlnFBof1DLWbsGtMITmETVjHecyRcAPr1i4eqq8Skgg.JPEG/KakaoTalk_20260819_191135989_05.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMjMy/MDAxNzg3MTg3NzQ3MjMw.0Sb0sKoplBTSyDTMDiK2HFZKZuCgFO-eTg1gNswyxPsg.BqKn25a0AnuiJsRRUxhP-oYY-komtWfJ2_CPFY1-Tt4g.JPEG/KakaoTalk_20260819_191135989_07.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMTAg/MDAxNzg3MTg3NzQ3ODYz.rhAha0FpDpUCnKBu7ao4wlTKPFLMNxsGDJpoOYIMa4kg.A0T1qyCedZE52hE3CsCTi9BUZ7m8FWI0NvyRpOonbp8g.JPEG/KakaoTalk_20260819_191135989_08.jpg?type=w966",
  "https://postfiles.pstatic.net/MjAyNjA4MjBfMSAg/MDAxNzg3MTg3NzQ4MTcw.WNTvLRW69KmwEYSxzj_hPcw5peM3OOl5_od-CWLSbZgg.Sl6psbHWd7tnphFYGGWbqprzuvEudE0lfFZCOgwTNJsg.JPEG/KakaoTalk_20260819_191135989_09.jpg?type=w966"
];

const YeoksamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageSources, setImageSources] = useState<string[]>(() =>
    YEOKSAM_IMAGES.map((url) => `https://wsrv.nl/?url=${encodeURIComponent(url)}`)
  );

  const handleImageError = (index: number) => {
    setImageSources((prev) => {
      const next = [...prev];
      if (next[index].startsWith('https://wsrv.nl/')) {
        next[index] = YEOKSAM_IMAGES[index];
      } else {
        next[index] = FALLBACK_CAMPUS_IMAGES[index % FALLBACK_CAMPUS_IMAGES.length];
      }
      return next;
    });
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % YEOKSAM_IMAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + YEOKSAM_IMAGES.length) % YEOKSAM_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % YEOKSAM_IMAGES.length);
  };

  return (
    <div 
      className="h-64 sm:h-72 bg-slate-900 relative overflow-hidden group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track Badges Overlay */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <span className="bg-blue-600/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">TRACK 03 보안</span>
        <span className="bg-blue-600/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">TRACK 04 데이터</span>
      </div>

      {/* Counter Badge */}
      <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-full">
        {currentIndex + 1} / {YEOKSAM_IMAGES.length}
      </div>

      {/* Image Slider */}
      <div className="w-full h-full relative">
        {YEOKSAM_IMAGES.map((_, idx) => (
          <img
            key={idx}
            src={imageSources[idx]}
            alt={`역삼 캠퍼스 사진 ${idx + 1}`}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onError={() => handleImageError(idx)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="이전 사진"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="다음 사진"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-3 py-1 bg-black/30 backdrop-blur-xs rounded-full">
        {YEOKSAM_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-5' : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            aria-label={`${idx + 1}번 사진으로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

const GwacheonCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageSources, setImageSources] = useState<string[]>(() =>
    GWACHEON_IMAGES.map((url) => `https://wsrv.nl/?url=${encodeURIComponent(url)}`)
  );

  const handleImageError = (index: number) => {
    setImageSources((prev) => {
      const next = [...prev];
      if (next[index].startsWith('https://wsrv.nl/')) {
        next[index] = GWACHEON_IMAGES[index];
      } else {
        next[index] = FALLBACK_CAMPUS_IMAGES[index % FALLBACK_CAMPUS_IMAGES.length];
      }
      return next;
    });
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GWACHEON_IMAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + GWACHEON_IMAGES.length) % GWACHEON_IMAGES.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % GWACHEON_IMAGES.length);
  };

  return (
    <div 
      className="h-64 sm:h-72 bg-slate-900 relative overflow-hidden group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Track Badges Overlay */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <span className="bg-indigo-600/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">TRACK 01 에이전트</span>
        <span className="bg-indigo-600/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">TRACK 02 아키텍트</span>
      </div>

      {/* Counter Badge */}
      <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-full">
        {currentIndex + 1} / {GWACHEON_IMAGES.length}
      </div>

      {/* Image Slider */}
      <div className="w-full h-full relative">
        {GWACHEON_IMAGES.map((_, idx) => (
          <img
            key={idx}
            src={imageSources[idx]}
            alt={`과천 캠퍼스 사진 ${idx + 1}`}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onError={() => handleImageError(idx)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="이전 사진"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="다음 사진"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-3 py-1 bg-black/30 backdrop-blur-xs rounded-full">
        {GWACHEON_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-white w-5' : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            aria-label={`${idx + 1}번 사진으로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

const ConsultationSection = () => {
  const [course, setCourse] = useState('AI 에이전트');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agreePrivacy, setAgreePrivacy] = useState(true);
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreePrivacy) {
      alert('개인정보 수집 및 이용에 동의해야 상담 신청이 가능합니다.');
      return;
    }

    // 1. Optimistic UI: Immediately show success message! (0.1s response feeling)
    setIsSubmitted(true);

    // 2. Prepare Form Data according to InputHaven spec & requirement
    const formData = new FormData();
    formData.append('_form_id', '914168973e93bda60f4eac1e7cbe1449');
    formData.append('name', name);
    formData.append('course', course);
    formData.append('age', age);
    formData.append('phone', phone);
    
    formData.append('message', message);

    // 3. Background transmission with keepalive: true
    try {
      fetch('https://inputhaven.com/api/v1/submit', {
        method: 'POST',
        body: formData,
        keepalive: true,
      }).catch((err) => {
        console.error('Background form submission error:', err);
      });
    } catch (err) {
      console.error('Background submission exception:', err);
    }
  };

  return (
    <section id="apply" className="py-20 md:py-24 bg-[#FFCC00] text-slate-900 border-t border-yellow-400">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-6 tracking-tight">
              지금, AI 취업에<br />
              도전하세요!<br />
            
            </h2>

            <p id="apply-menu-target" className="text-base md:text-lg text-slate-900 font-bold mb-10 leading-relaxed scroll-mt-24">
              국비지원 자격 여부부터 취업 및 교육과정까지<br />
              <span className="underline underline-offset-4 decoration-2">무료로 상담해드립니다.</span>
            </p>

            <div className="space-y-6 mb-10">
              <a 
                href="tel:1877-5280" 
                onClick={(e) => {
                  if (window.innerWidth >= 768) {
                    e.preventDefault();
                  }
                }}
                className="flex items-center gap-4 group md:pointer-events-none md:cursor-default"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0 group-hover:bg-slate-800 transition-colors">
                  <Phone className="w-6 h-6 text-[#FFCC00]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">교육문의</div>
                  <div className="text-2xl md:text-3xl font-black text-black tracking-tight group-hover:underline md:group-hover:no-underline">1877-5280</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#FFCC00]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">교육장소</div>
                  <div className="text-lg md:text-xl font-extrabold text-black tracking-tight">역삼(강남) / 과천</div>
                </div>
              </div>
            </div>

            <div className="text-lg md:text-xl font-black text-black">
              여러분의 꿈을 응원합니다!
            </div>
          </div>

          {/* Right Column: Fast Consultation Card Form */}
          <div id="apply-form" className="lg:col-span-6 scroll-mt-20">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-yellow-200/80 text-left relative">
              
              <div className="flex items-center gap-2 mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">빠른 교육상담 신청</h3>
                <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block shrink-0"></span>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 px-2 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">상담 신청이 완료되었습니다!</h4>
                  <p className="text-slate-600 font-medium text-sm mb-8 leading-relaxed">
                    담당 취업 전문가가 확인 후 입력해주신 연락처로<br />
                    빠르고 친절하게 안내드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setAge('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="bg-black text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    추가 문의 작성하기
                  </button>
                </div>
              ) : (
                <form
                  action="https://inputhaven.com/api/v1/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="_form_id" value="914168973e93bda60f4eac1e7cbe1449" />

                  {/* 이름 & 나이 Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        이름 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="홍길동"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        나이 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="예: 30"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* 연락처 */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="010-0000-0000"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                    />
                  </div>

                  {/* 관심과정 / 과정명 (Exposed / Visible) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      과정명 <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['메가존 AI에이전트', '메가존 AI아키텍트', '메가존 AI보안', '메가존 AI데이터'].map((c) => (
                        <label
                          key={c}
                          className={`flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                            course === c
                              ? 'border-black bg-slate-900 text-white shadow-xs'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="course_select"
                            value={c}
                            checked={course === c}
                            onChange={() => setCourse(c)}
                            className="hidden"
                          />
                          <span
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                              course === c ? 'border-white bg-indigo-600' : 'border-slate-400 bg-white'
                            }`}
                          ></span>
                          <span className="whitespace-nowrap">{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 문의내용 (Optional / 선택) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      문의내용 <span className="text-slate-400 font-normal">(선택)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="궁금하신 점을 자유롭게 적어주세요."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* 개인정보 동의 */}
                  <div>
                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                        <input
                          type="checkbox"
                          checked={agreePrivacy}
                          onChange={(e) => setAgreePrivacy(e.target.checked)}
                          className="w-4 h-4 rounded text-black focus:ring-black border-slate-300 accent-black"
                        />
                        <span>개인정보 수집 및 이용에 동의합니다.</span>
                      </label>
                      <button 
                        type="button" 
                        onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
                        className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-0.5 transition-colors"
                      >
                        {showPrivacyDetails ? '접기' : '자세히보기'} 
                        {showPrivacyDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {showPrivacyDetails && (
                      <div className="mt-3.5 p-3.5 bg-slate-50 border border-slate-200/90 rounded-xl text-[11px] leading-relaxed text-slate-600 max-h-28 overflow-y-auto space-y-2.5 font-normal animate-in fade-in duration-200 shadow-inner">
                        <div className="font-bold text-slate-900 text-xs pb-1 border-b border-slate-200/60">
                          [개인정보 수집·이용 동의] (필수)
                        </div>
                        
                        <div>
                          <div className="font-bold text-slate-800">1. 개인정보의 수집·이용 목적</div>
                          <ul className="list-disc list-inside text-slate-600 space-y-0.5 mt-0.5 pl-1">
                            <li>교육 과정 신청 접수 및 본인 확인</li>
                            <li>선발 전형 진행(서류 심사) 및 안내</li>
                            <li>과정 개강, 설명회 등 관련 정보 안내 (문자, 이메일)</li>
                          </ul>
                        </div>

                        <div>
                          <div className="font-bold text-slate-800">2. 수집하는 개인정보 항목</div>
                          <p className="text-slate-600 pl-1 mt-0.5">
                            • 필수 항목: 이름, 연락처(휴대폰 번호), 과정명
                          </p>
                        </div>

                        <div>
                          <div className="font-bold text-slate-800">3. 개인정보의 보유 및 이용 기간</div>
                          <ul className="list-disc list-inside text-slate-600 space-y-0.5 mt-0.5 pl-1">
                            <li>수집 목적 달성 및 전형 종료 후 즉시 파기</li>
                            <li>단, 최종 선발자의 경우 교육 종료 및 사후 관리 기간까지 보유 및 이용합니다.</li>
                          </ul>
                        </div>

                        <div>
                          <div className="font-bold text-slate-800">4. 개인정보 수집 거부에 관한 사항</div>
                          <p className="text-slate-600 pl-1 mt-0.5 leading-snug">
                            귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다.<br />
                            단, 이용자가 개인정보 수집 동의 거부를 하였을 경우에는 교육 신청이 불가합니다.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white font-black py-4 rounded-xl shadow-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-base md:text-lg tracking-wide mt-3"
                  >
                    <span>무료상담 신청하기</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-medium">
                    개인정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState('agent');
  const [certTab, setCertTab] = useState<'AWS' | 'MS' | 'GCP' | 'ISV'>('AWS');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* --- Navbar --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-12 md:h-14">
              <a href="https://megazone-ai.vercel.app" className="h-full block">
                <img 
                  src="https://postfiles.pstatic.net/MjAyNjA4MTlfMjk1/MDAxNzg3MTIyNzg0OTU3.iQ2WNK36u5q6n_aD5Kqy18b4mVdHUPmkrVnHGmr8iYAg.3q4RGLCB7QM_7tAfB1ckdPT_QMO7gUx8cOof5AoySh0g.PNG/%EB%A9%94%EA%B0%80%EC%A1%B4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%EB%A1%9C%EA%B3%A0.png?type=w966"
                  alt="Megazone Cloud Logo"
                  className="h-full w-auto object-contain cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 font-bold text-sm transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a href="#apply" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                교육상담 신청하기
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
                  className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#apply-menu-target" 
                onClick={(e) => {
                  setIsMenuOpen(false);
                  const el = document.getElementById('apply-menu-target');
                  if (el) {
                    e.preventDefault();
                    // Scroll 1 row further down than before (~100px offset)
                    const y = el.getBoundingClientRect().top + window.pageYOffset + 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="block w-full text-center mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                교육상담 신청하기
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
          
          <ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- Benefits Bar --- */}
        <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <ScrollReveal>
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
                  {/* Highlighted Component 1 */}
                  <div className="p-6 flex flex-col items-center text-center gap-3 bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-900 text-white relative overflow-hidden group shadow-lg ring-2 ring-indigo-400/80 transition-all duration-300 hover:scale-[1.03]">
                    <div className="absolute top-1.5 right-1.5 bg-amber-400 text-indigo-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse shadow-sm">
                      BEST 혜택
                    </div>
                    <div className="w-13 h-13 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-inner ring-2 ring-amber-300/70 animate-bounce">
                      🤝
                    </div>
                    <p className="font-black text-white leading-snug text-base tracking-tight drop-shadow-sm">
                      메가존클라우드<br/><span className="text-amber-300 underline decoration-amber-400 decoration-2 underline-offset-2">인턴십 &amp; 채용 연계</span>
                    </p>
                    {/* Shimmer line */}
                    <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
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
          </ScrollReveal>
        </section>

        {/* --- Problem & Why --- */}
        <section className="py-20 bg-gray-50">
          <ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- 4 Courses --- */}
        <section id="courses" className="py-24 bg-white">
          <ScrollReveal>
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
                  className={`text-left p-6 rounded-2xl border-2 transition-all cursor-pointer ${
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
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors cursor-pointer">
                      교육 신청하기
                    </a>
                    <button 
                      onClick={() => { window.location.href = 'https://megazone-ai-01.vercel.app'; }}
                      className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 cursor-pointer"
                    >
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
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors cursor-pointer">
                      교육 신청하기
                    </a>
                    <button 
                      onClick={() => { window.location.href = 'https://megazone-ai-02.vercel.app'; }}
                      className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 cursor-pointer"
                    >
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
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors cursor-pointer">
                      교육 신청하기
                    </a>
                    <button 
                      onClick={() => { window.location.href = 'https://megazone-ai-03.vercel.app'; }}
                      className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 cursor-pointer"
                    >
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
                    <a href="#apply" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors cursor-pointer">
                      교육 신청하기
                    </a>
                    <button 
                      onClick={() => { window.location.href = 'https://megazone-ai-04.vercel.app'; }}
                      className="text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      과정 상세 보기 <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          </ScrollReveal>
        </section>

        {/* --- Learning Journey --- */}
        <section className="py-24 bg-gray-50">
          <ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- Why Megazone --- */}
        <section className="py-24 bg-white">
          <ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- Partners --- */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <ScrollReveal>
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

            {/* Partner Logos - Styled as provided in image */}
            <div className="space-y-12">
              <div>
                {/* Header Badge & Subtitle */}
                <div className="flex items-center gap-3 mb-6 text-left">
                  <span className="bg-[#121A2D] text-white text-xs font-black px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-xs">
                    CSP PARTNERS
                  </span>
                  <span className="text-sm md:text-base font-semibold text-slate-500">
                    글로벌 클라우드 리더들과의 전략적 협업
                  </span>
                </div>

                {/* 5 Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {/* Card 1: AWS Training Partner */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 h-28 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
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

                  {/* Card 2: Google Cloud Partner */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 h-28 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
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

                  {/* Card 3: Microsoft Azure */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 h-28 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
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

                  {/* Card 4: ORACLE Cloud Infrastructure */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 h-28 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-lg font-black text-[#F80000] tracking-widest leading-none font-serif">ORACLE</div>
                      <div className="text-[11px] font-semibold text-slate-800 tracking-tight mt-1">Cloud Infrastructure</div>
                    </div>
                  </div>

                  {/* Card 5: MEGAZONE K-CLOUD */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 h-28 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-[10px] font-extrabold text-slate-900 tracking-widest uppercase mb-0.5">MEGAZONE</div>
                      <div className="text-lg font-black text-slate-900 tracking-tight leading-none">K·CLOUD</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CERTIFICATIONS Section */}
              <div className="pt-4">
                {/* Header Badge & Subtitle */}
                <div className="flex items-center gap-3 mb-6 text-left">
                  <span className="bg-[#121A2D] text-white text-xs font-black px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-xs">
                    CERTIFICATIONS
                  </span>
                  <span className="text-sm md:text-base font-semibold text-slate-500">
                    글로벌 CSP · 솔루션 기업이 공식 인증한 전문 역량
                  </span>
                </div>

                {/* Tab Pill Buttons */}
                <div className="flex justify-center mb-8">
                  <div className="bg-slate-100/90 p-1 rounded-full flex items-center gap-1 border border-slate-200/80 shadow-xs">
                    {(['AWS', 'MS', 'GCP', 'ISV'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setCertTab(tab)}
                        className={`px-5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                          certTab === tab
                            ? 'bg-white text-slate-900 shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cards Grid */}
                <div className={`grid grid-cols-2 sm:grid-cols-3 ${(certTab === 'MS' || certTab === 'GCP') ? 'lg:grid-cols-5' : 'lg:grid-cols-6'} gap-4`}>
                  {certTab === 'AWS' && [
                    { line1: 'Amazon Redshift', line2: 'Delivery' },
                    { line1: 'AI Services', line2: 'Competency' },
                    { line1: 'Managed Service', line2: 'Provider' },
                    { line1: 'Public Sector', line2: 'Solution Provider' },
                    { line1: 'Well-Architected', line2: 'Partner Program' },
                    { line1: 'SAP Services', line2: 'Competency' },
                  ].map((badge, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                      <svg viewBox="0 0 100 115" className="w-22 h-26">
                        <path 
                          d="M 5 5 L 75 5 L 95 25 L 95 110 L 5 110 Z" 
                          fill="none" 
                          stroke="#232F3E" 
                          strokeWidth="3.5" 
                          strokeLinejoin="miter"
                        />
                        <text x="50" y="28" textAnchor="middle" fill="#232F3E" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">aws</text>
                        <path d="M 32 32 Q 50 39 68 32" fill="none" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M 65 30 L 70 32 L 67 36 Z" fill="#FF9900" />
                        <text x="50" y="52" textAnchor="middle" fill="#232F3E" fontSize="9.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">PARTNER</text>
                        <text x="50" y="72" textAnchor="middle" fill="#232F3E" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{badge.line1}</text>
                        {badge.line2 && <text x="50" y="83" textAnchor="middle" fill="#232F3E" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{badge.line2}</text>}
                      </svg>
                    </div>
                  ))}

                  {certTab === 'MS' && [
                    { line1: 'Data & AI', line2: 'Azure' },
                    { line1: 'Digital & App Innovation', line2: 'Azure' },
                    { line1: 'Infrastructure', line2: 'Azure' },
                    { line1: 'Modern Work', line2: '' },
                    { line1: 'Security', line2: '' },
                  ].map((cert, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-5 h-40 flex flex-col justify-between shadow-xs hover:shadow-md transition-all text-left">
                      {/* Microsoft Solutions Partner Logo Header */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="grid grid-cols-2 gap-[1.5px] w-4.5 h-4.5 flex-shrink-0">
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

                      {/* Category Title */}
                      <div className="text-[13px] font-medium text-[#616161] leading-snug text-left mb-1">
                        <div>{cert.line1}</div>
                        {cert.line2 && <div>{cert.line2}</div>}
                      </div>
                    </div>
                  ))}

                  {certTab === 'GCP' && (
                    <>
                      {/* Card 1: Google Cloud Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 h-40 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all">
                        <div className="flex flex-col items-center justify-center my-auto">
                          <svg className="w-12 h-12 mb-2" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                            <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                            <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                            <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                          </svg>
                          <div className="text-xs font-semibold text-[#757575]">Google Cloud</div>
                          <div className="text-sm font-bold text-[#424242]">Partner</div>
                        </div>
                      </div>

                      {/* Card 2: Infrastructure Specialization */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md transition-all">
                        <div className="flex flex-col items-center pt-1">
                          <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                            <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                            <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                            <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                          </svg>
                          <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SPECIALIZATION</div>
                          <div className="text-sm font-bold text-[#3C4043] mt-2">Infrastructure</div>
                        </div>
                        <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                      </div>

                      {/* Card 3: Work Transformation Enterprise */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md transition-all">
                        <div className="flex flex-col items-center pt-1">
                          <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                            <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                            <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                            <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                          </svg>
                          <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SPECIALIZATION</div>
                          <div className="text-sm font-bold text-[#3C4043] mt-1.5 leading-tight">
                            <div>Work Transformation</div>
                            <div>Enterprise</div>
                          </div>
                        </div>
                        <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                      </div>

                      {/* Card 4: Data Analytics */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md transition-all">
                        <div className="flex flex-col items-center pt-1">
                          <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                            <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                            <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                            <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                          </svg>
                          <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SPECIALIZATION</div>
                          <div className="text-sm font-bold text-[#3C4043] mt-1.5 leading-tight">
                            <div>Data</div>
                            <div>Analytics</div>
                          </div>
                        </div>
                        <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                      </div>

                      {/* Card 5: SELL | SERVICE Premier Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex flex-col items-center justify-between text-center shadow-xs hover:shadow-md transition-all">
                        <div className="flex flex-col items-center pt-1">
                          <svg className="w-6 h-6 mb-1" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                            <path fill="#EA4335" d="M12 4c1.86 0 3.56.77 4.79 2.01l-1.42 1.42C14.49 6.54 13.3 6 12 6c-2.97 0-5.43 2.16-5.9 5H4.07C4.6 7.42 7.96 4 12 4z" />
                            <path fill="#FBBC05" d="M6 14c0-.68.12-1.33.33-1.94L4.25 10.5C3.46 11.55 3 12.72 3 14c0 1.66.67 3.16 1.76 4.24l1.42-1.42C5.45 16.09 5 15.1 5 14h1z" />
                            <path fill="#34A853" d="M12 18c-2.3 0-4.27-1.3-5.24-3.19l-1.74 1.25C6.35 18.25 8.97 20 12 20c3.5 0 6.5-2.12 7.73-5.18l-1.87-.62C16.88 16.48 14.6 18 12 18z" />
                          </svg>
                          <div className="text-[9px] font-bold text-[#80868B] tracking-widest uppercase">SELL | SERVICE</div>
                          <div className="text-sm font-bold text-[#3C4043] mt-1.5 leading-tight">
                            <div>Premier</div>
                            <div>Partner</div>
                          </div>
                        </div>
                        <div className="text-[11px] font-medium text-[#80868B] pb-1">Google Cloud</div>
                      </div>
                    </>
                  )}

                  {certTab === 'ISV' && (
                    <>
                      {/* Card 1: Akamai Elite Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
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

                      {/* Card 2: Datadog DPN Premier Tier Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                        <div className="relative w-28 h-28 flex items-center justify-center">
                          <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-sm">
                            <defs>
                              <linearGradient id="purpleHex" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6E25B7" />
                                <stop offset="100%" stopColor="#3C096C" />
                              </linearGradient>
                            </defs>
                            <polygon points="50,3 95,28 95,87 50,112 5,87 5,28" fill="url(#purpleHex)" stroke="#9D4EDD" strokeWidth="2" />
                            <polygon points="50,8 90,31 90,84 50,107 10,84 10,31" fill="none" stroke="#E0AAFF" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.5" />
                            {/* Dog Icon */}
                            <path d="M 46 26 L 54 26 C 56 26 57 28 55 30 L 52 33 L 55 36 C 56 38 54 40 52 38 L 48 38 C 46 40 44 38 45 36 L 48 33 L 45 30 C 43 28 44 26 46 26 Z" fill="#FFFFFF" />
                            <circle cx="48" cy="29" r="1" fill="#3C096C" />
                            <text x="50" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">DPN</text>
                            <text x="50" y="69" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.2">PREMIER TIER</text>
                            <text x="50" y="81" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.3">PARTNER</text>
                          </svg>
                        </div>
                      </div>

                      {/* Card 3: Databricks Consulting Partner Elite */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                        <div className="relative w-24 h-28 flex items-center justify-center">
                          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-sm">
                            <path d="M 10 10 L 90 10 L 90 82 Q 90 115 50 120 Q 10 115 10 82 Z" fill="#1C2833" />
                            {/* Databricks Icon */}
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

                      {/* Card 4: SAP Gold Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
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

                      {/* Card 5: Snowflake AI Data Cloud Services Partner Elite */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                        <div className="relative w-28 h-28 flex items-center justify-center">
                          <svg viewBox="0 0 110 110" className="w-full h-full drop-shadow-xs">
                            <circle cx="55" cy="55" r="50" fill="none" stroke="#FF8C00" strokeWidth="4" />
                            <circle cx="55" cy="55" r="45" fill="#0099DD" />
                            {/* Snowflake Logo mark */}
                            <g transform="translate(43, 16) scale(0.6)">
                              <path d="M 20 0 L 20 20 M 10 10 L 30 10 M 13 3 L 27 17 M 13 17 L 27 3" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                            </g>
                            <text x="55" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="800" fontFamily="sans-serif">snowflake</text>
                            <text x="55" y="43" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.1">AI DATA CLOUD</text>
                            <text x="55" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="4.8" fontWeight="800" fontFamily="sans-serif">SERVICES PARTNER</text>
                            {/* Cloud + Hand */}
                            <path d="M 46 63 C 44 59 48 56 52 57 C 54 54 60 55 61 58 C 64 58 65 62 62 64 Z" fill="#FFFFFF" />
                            <path d="M 43 67 C 48 65 52 67 56 69 C 60 69 63 66 66 65 C 63 70 58 71 52 69 Z" fill="#FFFFFF" />
                            <text x="55" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">ELITE</text>
                          </svg>
                        </div>
                      </div>

                      {/* Card 6: Cloudflare Powered+ Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
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

                      {/* Card 7: GitLab Select Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-12 bg-[#171321] rounded-b-xl rounded-t-sm flex items-center justify-center shadow-xs">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
                            <div className="text-sm font-extrabold text-[#171321] leading-tight">Select</div>
                            <div className="text-sm font-extrabold text-[#171321] leading-tight">Partner</div>
                          </div>
                        </div>
                      </div>

                      {/* Card 8: Salesforce Partner */}
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-40 flex items-center justify-center shadow-xs hover:shadow-md transition-all">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#81C8F2] to-[#51A2DA] flex flex-col items-center justify-center p-2 shadow-xs">
                          {/* Salesforce Cloud */}
                          <svg className="w-10 h-7 text-white mb-0.5" viewBox="0 0 32 24" fill="currentColor">
                            <path d="M13.5 4.5 C15 2 18.5 1.5 21 3.5 C23.5 1 27.5 2 29.5 5 C31.5 7.5 31 11.5 29 13 C31 15 30.5 18.5 28 20 C25.5 21.5 22.5 21 21 19.5 C19.5 21.5 16 22 13.5 20 C11.5 22 8 21.5 6 19.5 C3.5 20 1 18 0.5 15 C-0.5 12 1 9 3.5 8 C3 5.5 5 2.5 8 2 C10.5 1.5 12.5 2.5 13.5 4.5 Z" />
                          </svg>
                          <span className="text-[10px] font-black text-white tracking-wider uppercase font-sans">PARTNER</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* TECH & SOLUTION PARTNERS Section with Infinite Marquee */}
              <div className="pt-14 overflow-hidden">
                {/* Header Badge & Subtitle */}
                <div className="flex items-center gap-3 mb-8 text-left">
                  <span className="bg-[#121A2D] text-white text-xs font-black px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-xs">
                    TECH & SOLUTION PARTNERS
                  </span>
                  <span className="text-sm md:text-base font-semibold text-slate-500">
                    AI · 데이터 · 인프라 전 영역의 파트너십
                  </span>
                </div>

                {/* Infinite Horizontal Marquee Container */}
                <div className="relative w-full overflow-hidden py-2">
                  {/* Left & Right Fade Gradients */}
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                  {/* Marquee Track */}
                  <div className="animate-marquee flex gap-4">
                    {/* Double the list for seamless infinite loop */}
                    {[1, 2].map((loopIdx) => (
                      <div key={loopIdx} className="flex gap-4 flex-shrink-0">
                        {/* 1. Red Hat */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 40 32">
                              <path d="M12 21.5c-3.8 0-8.5-1.5-10.5-3 0 0 3 4 10.5 4s14.5-2.5 15.5-5.5c1-3 0-5.5-3.5-5.5s-6.5.5-9 1c-2.5.5-3.5.5-3-.5s2-2 4.5-2 5.5.5 7.5 1.5c2 1 3.5 2 3.5 4.5 0 4.5-7 5.5-15.5 5.5z" fill="#CC0000"/>
                              <path d="M26.5 12.5c0 0-2.5-3-8.5-3s-10.5 2.5-10.5 5.5c0 1.5 1 2.5 2.5 3s3.5 0 5-.5c1.5-.5 3.5-.5 3 .5s-1.5 2-4 2-5-.5-6.5-1.5c-1.5-1-2.5-2-2.5-4 0-4 6-6.5 13-6.5s10 2.5 10 5.5c0 1-.5 2-1.5 2.5z" fill="#000000"/>
                            </svg>
                            <span className="text-lg font-black text-slate-900 tracking-tight">Red Hat</span>
                          </div>
                        </div>

                        {/* 2. ATLASSIAN */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="#0052CC">
                              <path d="M6.8 12.8L12 3l5.2 9.8c.4.8 1.4 1 2.1.6.8-.4 1-.1.6-.2l-6.8-12.8c-.6-1.1-2.2-1.1-2.8 0L3.5 13.2c-.4.8-.1 1.8.7 2.2.8.4 1.8.1 2.2-.7l.4-.9z" />
                              <path d="M11 15.5l1 1.9 1-1.9h-2z" opacity="0.6"/>
                            </svg>
                            <span className="text-lg font-black text-[#0052CC] tracking-tight">ATLASSIAN</span>
                          </div>
                        </div>

                        {/* 3. GitLab */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24">
                              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51a.42.42 0 01.8 0l2.44 7.51h8.2l2.44-7.51a.42.42 0 01.8 0l2.44 7.51 1.22 3.78a.84.84 0 01-.3.94z" fill="#E24329" />
                            </svg>
                            <span className="text-lg font-black text-slate-900 tracking-tight">GitLab</span>
                          </div>
                        </div>

                        {/* 4. MongoDB */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-7 flex-shrink-0" viewBox="0 0 24 28">
                              <path d="M12 0C12 0 11.8 3 11.5 5.5C10.5 11.5 6 13.5 6 18.5C6 22.5 8.5 25.5 12 26.5C15.5 25.5 18 22.5 18 18.5C18 13.5 13.5 11.5 12.5 5.5C12.2 3 12 0 12 0Z" fill="#13AA52" />
                              <path d="M12 0C12 0 12 23.5 12 28C12.5 27.8 13 27.5 13.5 27.2C13 25.5 12.8 21.5 12.8 18.5C12.8 13.5 12.3 11.5 12 0Z" fill="#118D4B" />
                            </svg>
                            <span className="text-lg font-extrabold text-[#001E2B] tracking-tight">MongoDB.</span>
                          </div>
                        </div>

                        {/* 5. CONFLUENT */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 32 32">
                              <circle cx="16" cy="16" r="14" fill="none" stroke="#132338" strokeWidth="2" />
                              <path d="M8 16 L24 16 M16 8 L16 24 M10 10 L22 22 M22 10 L10 22" stroke="#132338" strokeWidth="1.5" />
                            </svg>
                            <span className="text-base font-black text-[#132338] tracking-widest uppercase">CONFLUENT</span>
                          </div>
                        </div>

                        {/* 6. Fivetran */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2.5">
                            <svg className="w-6 h-7 flex-shrink-0" viewBox="0 0 24 28">
                              <path d="M6 0 L16 0 L10 28 L0 28 Z" fill="#0066FF"/>
                              <path d="M14 0 L24 0 L18 28 L8 28 Z" fill="#0066FF" opacity="0.5"/>
                            </svg>
                            <span className="text-xl font-black text-[#0066FF] tracking-tight">Fivetran</span>
                          </div>
                        </div>

                        {/* 7. WhaTap */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <div className="flex items-end gap-0.5 h-6">
                              <div className="w-1.5 h-3 bg-[#FF6B00]"></div>
                              <div className="w-1.5 h-4.5 bg-[#00B0FF]"></div>
                              <div className="w-1.5 h-6 bg-[#00E676]"></div>
                            </div>
                            <span className="text-xl font-bold text-slate-700 tracking-tight">WhaTap</span>
                          </div>
                        </div>

                        {/* 8. NVIDIA */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-8 h-6 flex-shrink-0" viewBox="0 0 36 24">
                              <rect width="36" height="24" rx="2" fill="#76B900" />
                              <path d="M8 12 C8 9 12 7 16 7 C20 7 24 9 24 12 C24 15 20 17 16 17" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
                            </svg>
                            <span className="text-xl font-black text-slate-900 tracking-tighter">NVIDIA</span>
                          </div>
                        </div>

                        {/* 9. databricks */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 32 32">
                              <path d="M4 8 L16 14 L28 8 L16 2 Z M4 14 L16 20 L28 14 L16 18 Z M4 20 L16 26 L28 20 L16 24 Z" fill="#FF3621" />
                            </svg>
                            <span className="text-xl font-black text-slate-900 tracking-tight">databricks</span>
                          </div>
                        </div>

                        {/* 10. DELL */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <span className="text-2xl font-black text-[#0076CE] tracking-tighter">DELL</span>
                        </div>

                        {/* 11. NUTANIX */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <span className="text-lg font-black text-slate-900 tracking-widest uppercase">NUTANIX</span>
                        </div>

                        {/* 12. veeam */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="bg-[#00D639] px-3.5 py-1.5 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-black text-white tracking-tight">veeam</span>
                          </div>
                        </div>

                        {/* 13. MariaDB */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-7 h-6 flex-shrink-0" viewBox="0 0 32 24">
                              <path d="M2 18 C6 14 10 6 16 8 C20 9 22 14 28 10 C26 16 20 20 12 19 Z" fill="#C27D38" />
                            </svg>
                            <span className="text-lg font-extrabold text-[#003545]">MariaDB</span>
                          </div>
                        </div>

                        {/* 14. Qlik */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-1">
                            <div className="relative flex items-center justify-center w-6 h-6 rounded-full border-2 border-slate-700">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#009845]"></div>
                            </div>
                            <span className="text-xl font-bold text-slate-800">lik</span>
                          </div>
                        </div>

                        {/* 15. splunk > a CISCO company */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex flex-col items-center">
                            <div className="text-lg font-black text-slate-900 tracking-tight">splunk &gt;</div>
                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider -mt-0.5">a CISCO company</div>
                          </div>
                        </div>

                        {/* 16. ORACLE */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <span className="text-xl font-black text-[#F80000] tracking-widest font-serif">ORACLE</span>
                        </div>

                        {/* 17. new relic */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2 L2 7 L2 17 L12 22 L22 17 L22 7 Z" stroke="#00AC69" strokeWidth="2.5" strokeLinejoin="round" />
                              <path d="M12 2 L12 12 M2 7 L12 12 M22 7 L12 12" stroke="#00AC69" strokeWidth="2" />
                            </svg>
                            <span className="text-lg font-extrabold text-[#1D252C]">new relic</span>
                          </div>
                        </div>

                        {/* 18. Grafana Labs */}
                        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 h-28 w-56 flex items-center justify-center shadow-xs hover:shadow-md transition-all flex-shrink-0">
                          <div className="flex items-center gap-2">
                            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 28 28">
                              <circle cx="14" cy="14" r="10" fill="none" stroke="#F46800" strokeWidth="3" />
                              <path d="M14 4 C18 8 18 20 14 24" fill="none" stroke="#F46800" strokeWidth="2" />
                            </svg>
                            <span className="text-base font-extrabold text-slate-900">Grafana <span className="text-[#F46800]">Labs</span></span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
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
                idx === 0 ? (
                  /* Highlighted Component 2 - Emerald Theme */
                  <ScrollReveal key={idx} delay={idx * 80}>
                    <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-950 text-white rounded-2xl p-8 border-2 border-emerald-300/90 shadow-2xl shadow-emerald-600/30 relative overflow-hidden group transform hover:-translate-y-1.5 transition-all duration-300">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center ring-2 ring-emerald-300/60 shadow-inner">
                          {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7 text-emerald-100' })}
                        </div>
                        <span className="text-xs font-black text-emerald-950 bg-emerald-300 px-3 py-1 rounded-full shadow-md animate-pulse">
                          핵심 혜택 01
                        </span>
                      </div>
                      <div className="text-xs font-black text-emerald-200 mb-2 bg-emerald-800/80 inline-block px-2.5 py-1 rounded-md border border-emerald-400/40">
                        {item.title}
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">{item.sub}</h3>
                      <p className="text-emerald-100 text-sm leading-relaxed">{item.desc}</p>

                      {/* Animated Light Beam */}
                      <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                    </div>
                  </ScrollReveal>
                ) : (
                  <ScrollReveal key={idx} delay={idx * 80}>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                        {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7' })}
                      </div>
                      <div className="text-xs font-bold text-indigo-600 mb-2 bg-indigo-50 inline-block px-2 py-1 rounded">{item.title}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.sub}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                )
              ))}
            </div>
          </div>
        </section>

        {/* --- Career --- */}
        <section className="py-24 bg-gray-50">
          <ScrollReveal>
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

                    {/* Highlighted Component 3 - Royal Sunburst Gold Theme */}
                    <ScrollReveal delay={150}>
                      <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-indigo-950 rounded-2xl p-6 border-2 border-yellow-100 shadow-2xl shadow-amber-400/50 relative overflow-hidden group hover:scale-[1.03] transition-all duration-300 cursor-pointer">
                        {/* Light Beam Animation */}
                        <div className="absolute -inset-x-full top-0 bottom-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                        
                        <div className="font-black text-indigo-950 mb-2 flex items-center gap-2 text-base relative z-10">
                          <Award className="w-6 h-6 text-indigo-950 animate-bounce" /> 
                          <span className="text-lg font-black tracking-tight text-indigo-950">우수 수료생 특전</span>
                          <span className="ml-auto text-[11px] bg-indigo-950 text-amber-300 font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md animate-pulse">
                            SPECIAL BENEFIT
                          </span>
                        </div>
                        <div className="text-sm text-indigo-950 font-extrabold leading-relaxed relative z-10 bg-white/45 backdrop-blur-xs p-3 rounded-xl border border-amber-600/30 shadow-inner">
                          서류 전형 면제 · 인턴십 연계 · 그룹사 및 파트너사 채용 기회 우선 제공
                        </div>
                      </div>
                    </ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- Reviews --- */}
        <section className="py-24 bg-slate-900 text-white">
          <ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- Project Review --- */}
        <section className="py-20 bg-[#F4F8FB] border-t border-slate-200/80">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Header Pill Badge */}
              <div className="inline-block bg-indigo-100/80 text-indigo-700 text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase mb-4 shadow-xs">
                PROJECT REVIEW
              </div>

              {/* Section Title */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                프로젝트 품평회 현장 스케치
              </h2>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-slate-600 font-medium mb-12 max-w-3xl mx-auto">
                교육의 마지막, 실전 프로젝트의 결과를 발표하고 현업 전문가의 피드백을 받는 품평회 현장입니다.
              </p>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-12 gap-8 items-stretch text-left">
                {/* Left Column: Video */}
                <div className="lg:col-span-7 bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 flex items-center justify-center">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover rounded-2xl max-h-[460px]"
                    src="https://training.megazone.com/ai-campus/vid/sketch.mp4"
                  />
                </div>

                {/* Right Column: 3 Feature Cards */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                  {[
                    {
                      num: '01',
                      text: '실전 프로젝트 결과를 직접 발표하는 공식 품평회',
                    },
                    {
                      num: '02',
                      text: '현업 전문가 · 멘토의 실무 관점 피드백',
                    },
                    {
                      num: '03',
                      text: '우수 프로젝트는 채용 연계 평가에 반영',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex items-center gap-5 flex-1"
                    >
                      <div className="bg-indigo-50 text-indigo-600 font-black text-sm px-3.5 py-2 rounded-xl flex items-center justify-center shrink-0">
                        {item.num}
                      </div>
                      <div className="text-base md:text-lg font-extrabold text-slate-800 leading-snug">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* --- Who --- */}
        <section className="py-24 bg-white">
          <ScrollReveal>
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
            </div>
          </ScrollReveal>
        </section>

        {/* --- Process --- */}
        <section className="py-24 bg-gray-50 border-t border-gray-200">
          <ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- Location --- */}
        <section className="py-24 bg-white">
          <ScrollReveal>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-indigo-600 font-bold tracking-widest text-sm mb-2 block uppercase">Location</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">오시는 길 · 교육장소</h2>
                <p className="text-lg text-gray-600">두 곳의 메가존클라우드 캠퍼스에서 과정별로 진행됩니다.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Campus 1 */}
                <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <GwacheonCarousel />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">과천 캠퍼스</h3>
                    <p className="text-gray-600 font-medium mb-4">과천 메가존클라우드 2층 교육장</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> 경기도 과천시 과천대로7길 74
                    </p>
                  </div>
                </div>

                {/* Campus 2 */}
                <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <YeoksamCarousel />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">역삼 캠퍼스</h3>
                    <p className="text-gray-600 font-medium mb-4">역삼 메가존클라우드 2층 교육장</p>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> 서울 강남구 논현로85길 46
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* --- FAQ --- */}
        <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
          <ScrollReveal>
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
          </ScrollReveal>
        </section>

        {/* --- Consultation Application Form (Fast Inquiry) --- */}
        <ConsultationSection />


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
              <a 
                href="tel:1877-5280" 
                onClick={(e) => {
                  if (window.innerWidth >= 768) {
                    e.preventDefault();
                  }
                }}
                className="text-xs font-bold text-indigo-600 hover:underline md:pointer-events-none md:cursor-default md:hover:no-underline md:text-gray-700"
              >
                1877-5280
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Mobile Sticky Bottom CTA --- */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 md:hidden z-50">
        <a href="#apply-form" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg">
          교육 상담 신청하기
        </a>
      </div>

      {/* --- PC Floating Round Consultation CTA --- */}
      <a 
        href="#apply"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('apply') || document.getElementById('apply-form');
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
        className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col items-center justify-center w-20 h-20 bg-indigo-600 text-white rounded-full shadow-2xl hover:bg-indigo-700 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer text-center group border-2 border-white/20"
      >
        {/* Animated Ping Ring for emphasis (7s cycle) */}
        <span className="absolute -inset-1 rounded-full bg-indigo-500 opacity-60 animate-ping-7s pointer-events-none"></span>
        <span className="absolute inset-0 rounded-full bg-indigo-600 animate-pulse-7s pointer-events-none opacity-40"></span>
        
        <Send className="w-5 h-5 mb-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 relative z-10" />
        <span className="text-[11px] font-bold leading-tight relative z-10">
          상담신청
        </span>
      </a>

    </div>
  );
}
