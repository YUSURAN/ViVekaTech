// --- Global React Hooks ---
const { useState, useEffect, useRef } = React;

// --- Lucide Icons as SVG Components ---
// Replaces the 'lucide-react' library with inline SVGs
const Icons = {
    Send: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
    Menu: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
    X: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    Book: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
    BarChart3: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
    FileText: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
    Headphones: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>,
    User: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    BookOpen: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    Youtube: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3a24.12 24.12 0 0 1 0 10c0 1-5 3-9.5 3s-9.5-2-9.5-3Z"/><path d="m10 15 5-3-5-3z"/></svg>,
    BrainCircuit: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.9-1.4"/><path d="M12 5a3 3 0 1 1 5.9-1.4"/><path d="M15 13a3 3 0 1 0-5.9-1.4"/><path d="M15 13a3 3 0 1 1 5.9-1.4"/><path d="M9 13a3 3 0 1 1-5.9-1.4"/><path d="M9 13a3 3 0 1 0 5.9-1.4"/><path d="M2 13h2"/><path d="M20 13h2"/><path d="M12 19v2"/><path d="M12 3V1"/><path d="m4.9 5.5-.8-.8"/><path d="m19.9 5.5.8-.8"/><path d="m4.9 19.5-.8.8"/><path d="m19.9 19.5.8.8"/><path d="M12 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/><path d="M12 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/></svg>,
    Sparkles: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.93 2.25 12 7.31l2.07-5.06M12 22l-2.07-5.06L7.86 19.01M2.25 10.07l5.06 2.07-5.06 2.07M22 12l-5.06-2.07 5.06-2.07"/><path d="M16 3.5a2.5 2.5 0 0 1 3.5-3.5 2.5 2.5 0 0 1 3.5 3.5 2.5 2.5 0 0 1-3.5 3.5 2.5 2.5 0 0 1-3.5-3.5Zm-10.5 12a2.5 2.5 0 0 1 3.5-3.5 2.5 2.5 0 0 1 3.5 3.5 2.5 2.5 0 0 1-3.5 3.5 2.5 2.5 0 0 1-3.5-3.5Z"/></svg>,
    Loader2: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>,
    Wind: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>,
    Brain: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.9-1.4"/><path d="M12 5a3 3 0 1 1 5.9-1.4"/><path d="M15 13a3 3 0 1 0-5.9-1.4"/><path d="M15 13a3 3 0 1 1 5.9-1.4"/><path d="M9 13a3 3 0 1 1-5.9-1.4"/><path d="M9 13a3 3 0 1 0 5.9-1.4"/><path d="M18.1 8.6a3 3 0 1 1-4.7-3.2"/><path d="M6 8.6a3 3 0 1 0 4.7-3.2"/><path d="M12 21a3 3 0 1 1-4.7-3.2"/><path d="M12 21a3 3 0 1 0 4.7-3.2"/></svg>,
    PenSquare: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    Footprints: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 16v-2.38c0-.97.5-1.84 1.3-2.31l1.4-1.58c.8-.88 2.2-.88 3 0l1.4 1.58c.8.48 1.3 1.34 1.3 2.31V16"/><path d="M4 20h4"/><path d="M13.5 13.4a4 4 0 1 1 6.3-4.5"/><path d="M22 17h-4"/></svg>,
    RotateCw: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/></svg>,
    CloudRain: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/></svg>,
    Trees: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 10v.2A3 3 0 0 1 7 13v5H4v-5c0-1.7.9-3.2 2.2-4C7.5 7.2 9 6.2 10 6Z"/><path d="M7 13h10v5h-3v-5a3 3 0 0 0-3-3v-.2a3 3 0 0 0-2.8-3c-.4.2-1.2.7-2.2 1.8Z"/><path d="M21 13v5h-3v-5a3 3 0 0 0-3-3V9.8c1.2-1 2.5-2.2 3.8-3.8 1.3 1.6 2.2 3.3 2.2 5Z"/></svg>,
    Waves: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>,
    StopCircle: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/></svg>,
    ChevronLeft: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="15 18 9 12 15 6"/></svg>,
    ChevronRight: ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"/></svg>,
};


// --- Firebase Configuration ---
// These variables are placeholders. They would be injected in a real environment.
// For this example, we use fallback values.
const __firebase_config = undefined; 
const __initial_auth_token = undefined;
const __app_id = undefined;

const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {
    // IMPORTANT: Replace with your Firebase project configuration
    apiKey: "YOUR_API_KEY",// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYdfmLjBYJMXb722xkLceLKFZ5FRC_jgU",
  authDomain: "viveka-technology.firebaseapp.com",
  projectId: "viveka-technology",
  storageBucket: "viveka-technology.firebasestorage.app",
  messagingSenderId: "20481203727",
  appId: "1:20481203727:web:759bfaf0e4ea2642cf0d7a",
  measurementId: "G-1PY2H6NTD9"
};
    authDomain: "viveka-technology.firebaseapp.com",
    projectId: "viveka-technology",
    storageBucket: "viveka-technology.firebasestorage.app",
    messagingSenderId: "20481203727",
    appId: "1:20481203727:web:759bfaf0e4ea2642cf0d7a"
};

const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// Initialize Firebase using the compat libraries
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

// --- Main App Component ---
function App() {
    const [screen, setScreen] = useState('login');
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const pianoSynth = useRef(null);

    useEffect(() => {
        pianoSynth.current = new Tone.Synth({
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.02, decay: 0.1, sustain: 0.3, release: 1 }
        }).toDestination();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUserId(user.uid);
                const userDocRef = db.doc(`artifacts/${appId}/users/${user.uid}/profile/info`);
                const userDocSnap = await userDocRef.get();
                if (userDocSnap.exists) {
                    setUserName(userDocSnap.data().name);
                    setScreen('chat');
                }
            } else {
                if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                    try {
                        await auth.signInWithCustomToken(__initial_auth_token);
                    } catch (error) {
                        console.error("Error signing in with custom token, falling back to anonymous:", error);
                        await auth.signInAnonymously();
                    }
                } else {
                    await auth.signInAnonymously();
                }
            }
            setIsAuthReady(true);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (name) => {
        if (!name.trim() || !userId) return;
        await db.doc(`artifacts/${appId}/users/${userId}/profile/info`).set({ name: name });
        setUserName(name);
        setScreen('chat');
    };

    const playLoginSound = () => {
        Tone.start();
        pianoSynth.current.triggerAttackRelease('C4', '1.5s');
        setTimeout(() => pianoSynth.current.triggerAttackRelease('G4', '1.5s'), 700);
    };

    if (!isAuthReady) {
        return (
            <div className="flex items-center justify-center h-screen bg-blue-50 font-sans">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">Menyambungkan ke ViVeka...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-screen bg-blue-50 font-sans">
            {screen === 'login' ? (
                <LoginScreen onLogin={handleLogin} playSound={playLoginSound} />
            ) : (
                <ChatScreen userName={userName} userId={userId} />
            )}
        </div>
    );
}

// --- Login Screen Component ---
function LoginScreen({ onLogin, playSound }) {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            playSound();
            onLogin(name);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-blue-100 to-white p-4">
            <div className="text-center w-full max-w-sm">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-800">ViVeka</h1>
                    <p className="mt-2 text-lg text-gray-600">Teman Reflektif Emosimu</p>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukan nama Anda"
                            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300"
                        />
                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Masuk
                        </button>
                    </form>
                </div>
                <p className="mt-8 text-sm text-gray-500">Diciptakan oleh YNZ AI Technology</p>
            </div>
        </div>
    );
}

// --- Chat Screen Component ---
function ChatScreen({ userName, userId }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);
    const chatEndRef = useRef(null);
    const notificationSynth = useRef(null);

    useEffect(() => {
        notificationSynth.current = new Tone.Synth({
            oscillator: { type: 'sine' },
            envelope: { attack: 0.005, decay: 0.1, sustain: 0.01, release: 0.2 }
        }).toDestination();
    }, []);

    useEffect(() => {
        if (!userId) return;
        const q = db.collection(`artifacts/${appId}/users/${userId}/chatHistory`);
        const unsubscribe = q.onSnapshot((querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push({ id: doc.id, ...doc.data() });
            });
            const sortedMsgs = msgs.sort((a, b) => a.timestamp?.toMillis() - b.timestamp?.toMillis());
            if (sortedMsgs.length === 0) {
                const welcomeMsg = {
                    id: 'welcome-msg',
                    text: `Hai, ${userName}. Terima kasih telah datang. Ceritakan apa yang kamu rasakan hari ini.`,
                    sender: 'viveka',
                    timestamp: new Date()
                };
                setMessages([welcomeMsg]);
                playNotificationSound();
            } else {
                setMessages(sortedMsgs);
            }
        });
        return () => unsubscribe();
    }, [userId, userName]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const playNotificationSound = () => {
        Tone.start();
        notificationSynth.current.triggerAttackRelease('G5', '8n', Tone.now());
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { text: input, sender: 'user', timestamp: serverTimestamp(), type: 'text' };
        const currentInput = input;
        setInput('');
        await db.collection(`artifacts/${appId}/users/${userId}/chatHistory`).add(userMessage);

        setIsLoading(true);
        const vivekaResponse = await getVivekaResponse(currentInput, messages);
        setIsLoading(false);

        if (vivekaResponse.includes("[GENTLE_GUIDANCE_STRESS]")) {
             const [preText, postText] = vivekaResponse.split("[GENTLE_GUIDANCE_STRESS]");
             if(preText) {
                 const vivekaPreMessage = { text: preText.trim(), sender: 'viveka', timestamp: serverTimestamp(), type: 'text' };
                 await db.collection(`artifacts/${appId}/users/${userId}/chatHistory`).add(vivekaPreMessage);
             }
             const guidanceMessage = { text: "Berikut adalah beberapa teknik yang bisa dieksplorasi:", sender: 'viveka', timestamp: serverTimestamp(), type: 'guidance_stress' };
             await db.collection(`artifacts/${appId}/users/${userId}/chatHistory`).add(guidanceMessage);

        } else {
            const vivekaMessage = { text: vivekaResponse, sender: 'viveka', timestamp: serverTimestamp(), type: 'text' };
            await db.collection(`artifacts/${appId}/users/${userId}/chatHistory`).add(vivekaMessage);
        }
        playNotificationSound();
    };

    const getVivekaResponse = async (userInput, chatHistory) => {
        // IMPORTANT: Replace with your Gemini API Key
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const personaPrompt = `Kamu adalah ViVeka, chatbot psikologi empatik dan ilmiah. Tujuanmu adalah membantu pengguna mengenali, memahami, dan menerima emosi mereka dengan tenang, reflektif, dan tanpa menghakimi.
        
        ATURAN UTAMA:
        1.  Fokus pada emosi, bukan peristiwa. Validasi perasaan pengguna.
        2.  Gunakan gaya bicara lembut, suportif, tidak menggurui. Nada netral.
        3.  JANGAN memberi diagnosa atau perintah langsung ("Kamu harus…").

        ATURAN KHUSUS "PANDUAN LEMBUT":
        - JIKA pengguna secara eksplisit meminta solusi, cara, tips, atau bantuan untuk masalah seperti "stres", "cemas", "overthinking" (e.g., "gimana cara atasi stres?", "solusi cemas", "apa yang harus aku lakukan?"), JANGAN langsung berikan daftar solusi.
        - SEBAGAI GANTINYA, berikan respons "gateway" yang empatik terlebih dahulu, lalu akhiri dengan token khusus.
        - Contoh Respons Gateway untuk Stres: "Terima kasih sudah bertanya. Sangat wajar mencari cara untuk merasa lebih baik saat stres. ViVeka tidak memberi perintah, tapi bisa berbagi beberapa teknik umum berbasis psikologi. [GENTLE_GUIDANCE_STRESS]"
        - Token yang tersedia: [GENTLE_GUIDANCE_STRESS].
        
        ATURAN NORMAL:
        - Jika pengguna tidak meminta solusi, lanjutkan percakapan seperti biasa dengan validasi emosi.
        - Jika topik di luar psikologi, tolak dengan sopan.`;

        const historyForApi = chatHistory.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        })).slice(-10);

        const payload = {
            contents: [...historyForApi, { role: "user", parts: [{ text: userInput }] }],
            systemInstruction: { parts: [{ text: personaPrompt }] }
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`API call failed: ${response.status}`);
            const result = await response.json();
            if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
                return result.candidates[0].content.parts[0].text;
            }
            return "Maaf, ada sedikit kendala. Bisakah kamu mengulanginya?";
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            return "Maaf, ViVeka sedang mengalami gangguan. Coba lagi nanti.";
        }
    };

    return (
        <div className="flex h-screen w-screen bg-gray-100">
            <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} setActiveFeature={setActiveFeature} />
            <main className="flex-1 flex flex-col relative h-full">
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <span className="text-7xl md:text-9xl font-bold text-gray-200/50 select-none">ViVeka</span>
                </div>
                <div className="absolute bottom-10 right-10 flex items-center justify-center z-0">
                    <span className="text-md md:text-xl font-bold text-gray-300/80 select-none">oleh YNZ AI</span>
                </div>
                <header className="bg-white/70 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center justify-between z-10">
                    <button onClick={() => setSidebarOpen(true)} className="p-2 text-gray-600 hover:text-blue-600 md:hidden"><Icons.Menu /></button>
                    <h2 className="text-lg font-semibold text-gray-800">Percakapan dengan ViVeka</h2>
                    <div className="w-8"></div>
                </header>
                <div className="flex-1 overflow-y-auto p-6 space-y-4 z-10">
                    {messages.map((msg) => (
                         <div key={msg.id} className={`flex items-end gap-3 w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'viveka' && <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold self-start mt-1">V</div>}
                            <div className="max-w-xs md:max-w-md lg:max-w-xl">
                            {msg.type === 'guidance_stress' ? (
                                <GentleGuidanceCard />
                            ) : (
                                <div className={`px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow-sm'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-end gap-3 justify-start">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">V</div>
                            <div className="px-4 py-3 rounded-2xl bg-white text-gray-800 rounded-bl-none shadow-sm">
                                <div className="flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-0"></span>
                                    <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-150"></span>
                                    <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-4 border-t border-gray-200 z-10">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Tuliskan perasaanmu di sini..."
                            className="flex-1 w-full px-4 py-3 bg-gray-100 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                            disabled={isLoading}
                        />
                        <button type="submit" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg disabled:bg-blue-300 disabled:cursor-not-allowed" disabled={isLoading || !input.trim()}><Icons.Send size={20} /></button>
                    </form>
                </div>
            </main>
            {activeFeature && <FeatureModal feature={activeFeature} onClose={() => setActiveFeature(null)} userId={userId} />}
        </div>
    );
}

// --- Gentle Guidance Card Component ---
function GentleGuidanceCard() {
    const techniques = [
        { icon: Icons.Wind, title: "Teknik Pernapasan Kotak", description: "Tarik napas 4 detik, tahan 4 detik, hembuskan 4 detik, tahan 4 detik. Ulangi." },
        { icon: Icons.Brain, title: "Teknik Grounding 5-4-3-2-1", description: "Sebutkan 5 benda yang kamu lihat, 4 hal yang kamu sentuh, 3 suara yang kamu dengar, 2 bau yang kamu cium, 1 rasa yang kamu kecap." },
        { icon: Icons.PenSquare, title: "Menulis Reflektif", description: "Tuliskan semua yang kamu rasakan di kertas tanpa menghakimi. Biarkan semua keluar." },
        { icon: Icons.Footprints, title: "Aktivitas Fisik Ringan", description: "Berjalan kaki selama 5-10 menit di sekitar ruangan atau halaman dapat membantu." }
    ];

    return (
        <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-md border border-blue-100 w-full">
            <h4 className="font-bold text-gray-800 mb-3 text-base">Beberapa Teknik untuk Menenangkan Diri</h4>
            <div className="space-y-4">
                {techniques.map(tech => (
                    <div key={tech.title} className="flex items-start gap-3">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mt-1"><tech.icon size={20} /></div>
                        <div>
                            <h5 className="font-semibold text-gray-700 text-sm">{tech.title}</h5>
                            <p className="text-gray-500 text-xs">{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
                Pilih yang paling nyaman bagimu. Ingat, ini adalah pertolongan pertama emosional. Jika stres berlanjut, hubungi profesional kesehatan mental.
            </p>
        </div>
    );
}


// --- Sidebar and Other Components ---
function Sidebar({ isOpen, setOpen, setActiveFeature }) {
    const features = [
        { id: 'history', name: 'Riwayat Chat', icon: Icons.Book },
        { id: 'mood', name: 'Mood Tracker', icon: Icons.BarChart3 },
        { id: 'notes', name: 'Catatan Emosi', icon: Icons.FileText },
        { id: 'relax', name: 'Mode Relaksasi', icon: Icons.Headphones },
        { id: 'expert', name: 'Tanya Pakar', icon: Icons.User, premium: true },
        { id: 'articles', name: 'Artikel Edukasi', icon: Icons.BookOpen },
        { id: 'videos', name: 'Video Edukasi', icon: Icons.Youtube },
        { id: 'quiz', name: 'Quiz Psikologi', icon: Icons.BrainCircuit },
    ];
    const handleFeatureClick = (id) => {
        setActiveFeature(id);
        setOpen(false);
    };
    return (
        <React.Fragment>
            <div className={`fixed inset-0 bg-black/40 z-20 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)}></div>
            <aside className={`absolute md:relative flex flex-col w-64 bg-white border-r border-gray-200 h-full z-30 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="p-4 border-b flex items-center justify-between">
                    <h1 className="text-xl font-bold text-blue-800">ViVeka</h1>
                    <button onClick={() => setOpen(false)} className="p-1 text-gray-500 hover:text-blue-600 md:hidden"><Icons.X /></button>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {features.map(feature => (
                        <button key={feature.id} onClick={() => handleFeatureClick(feature.id)} className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition-colors">
                            <feature.icon size={20} />
                            <span className="font-medium">{feature.name}</span>
                            {feature.premium && <span className="ml-auto text-xs font-semibold bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full">Premium</span>}
                        </button>
                    ))}
                </nav>
            </aside>
        </React.Fragment>
    );
}

function EmotionJournal({ userId }) {
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [reflectingId, setReflectingId] = useState(null);

    useEffect(() => {
        if (!userId) return;
        const q = db.collection(`artifacts/${appId}/users/${userId}/journalEntries`);
        const unsubscribe = q.onSnapshot((snapshot) => {
            const fetchedEntries = [];
            snapshot.forEach(doc => fetchedEntries.push({ id: doc.id, ...doc.data() }));
            setEntries(fetchedEntries.sort((a, b) => b.timestamp?.toMillis() - a.timestamp?.toMillis()));
        });
        return () => unsubscribe();
    }, [userId]);

    const handleSaveEntry = async () => {
        if (!newEntry.trim()) return;
        setIsLoading(true);
        await db.collection(`artifacts/${appId}/users/${userId}/journalEntries`).add({
            text: newEntry,
            timestamp: serverTimestamp(),
            reflection: null
        });
        setNewEntry('');
        setIsLoading(false);
    };

    const getJournalReflection = async (entry) => {
        setReflectingId(entry.id);
        const apiKey = ""; // IMPORTANT: Replace with your Gemini API Key
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const prompt = `Anda adalah ViVeka, chatbot psikologi yang empatik. Seorang pengguna telah menulis entri jurnal ini: "${entry.text}". Baca entri tersebut, identifikasi emosi inti, dan berikan ringkasan reflektif yang singkat, lembut, dan memvalidasi dalam 2-3 kalimat. Jangan memberi nasihat. Fokus pada validasi perasaan mereka.`;

        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`API call failed: ${response.status}`);
            const result = await response.json();
            const reflectionText = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (reflectionText) {
                const entryRef = db.doc(`artifacts/${appId}/users/${userId}/journalEntries/${entry.id}`);
                await entryRef.update({ reflection: reflectionText });
            }
        } catch (error) {
            console.error("Error getting reflection:", error);
        } finally {
            setReflectingId(null);
        }
    };

    return (
        <div className="p-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Catatan Emosi</h3>
            <div className="space-y-4">
                <textarea
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    placeholder="Tuliskan apa yang kamu rasakan hari ini..."
                    className="w-full h-28 p-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    disabled={isLoading}
                />
                <button
                    onClick={handleSaveEntry}
                    disabled={isLoading || !newEntry.trim()}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? <Icons.Loader2 className="animate-spin" /> : 'Simpan Catatan'}
                </button>
            </div>
            <div className="mt-6 space-y-4 max-h-64 overflow-y-auto pr-2">
                {entries.length === 0 && !isLoading && <p className="text-center text-gray-500">Belum ada catatan.</p>}
                {entries.map(entry => (
                    <div key={entry.id} className="bg-white p-4 rounded-lg shadow-sm border">
                        <p className="text-gray-500 text-xs mb-2">{entry.timestamp ? new Date(entry.timestamp.toDate()).toLocaleString('id-ID') : 'Baru saja'}</p>
                        <p className="text-gray-800 whitespace-pre-wrap">{entry.text}</p>
                        {entry.reflection ? (
                            <div className="mt-3 pt-3 border-t border-blue-100">
                                <p className="text-sm font-semibold text-blue-700 flex items-center gap-2"><Icons.Sparkles size={16} className="text-yellow-500"/> Refleksi dari ViVeka:</p>
                                <p className="text-sm text-blue-900/80 mt-1 italic">"{entry.reflection}"</p>
                            </div>
                        ) : (
                            <button
                                onClick={() => getJournalReflection(entry)}
                                disabled={reflectingId === entry.id}
                                className="mt-3 w-full text-sm bg-blue-100 text-blue-800 py-2 px-3 rounded-lg font-semibold hover:bg-blue-200 transition disabled:bg-gray-200 flex items-center justify-center gap-2"
                            >
                                {reflectingId === entry.id ? (
                                    <React.Fragment><Icons.Loader2 className="animate-spin" size={16} /> Meminta Refleksi...</React.Fragment>
                                ) : (
                                    <React.Fragment><Icons.Sparkles size={16} /> Dapatkan Refleksi ✨</React.Fragment>
                                )}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function EducationVideos() {
    const videos = [
        { id: 'VQqA6XGrY3E', title: 'Mengenal Kecemasan Sosial', description: 'Video ini menjelaskan apa itu kecemasan sosial dan bagaimana mengenalinya dalam kehidupan sehari-hari.' },
        { id: 'QW4By7KrIyw', title: 'Cara Mengelola Overthinking', description: 'Pelajari teknik sederhana untuk menghentikan siklus pikiran berlebih yang melelahkan.' },
        { id: 'rGEKzfsENxY', title: 'Memahami dan Menerima Emosi', description: 'Sebuah panduan untuk tidak melawan emosi, tetapi belajar untuk memahami dan menerimanya.' },
        { id: 'j9vqa4K4h90', title: 'Latihan Pernapasan untuk Stres', description: 'Ikuti latihan pernapasan dalam video ini untuk membantu menenangkan sistem saraf Anda.' },
        { id: 'JHHqmGx_SKY', title: 'Pentingnya Menyayangi Diri Sendiri', description: 'Temukan mengapa self-love atau menyayangi diri sendiri adalah fondasi kesehatan mental yang baik.' },
    ];

    return (
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Video Edukasi</h3>
            <p className="text-gray-600 mb-6">Tonton video pendek dari sumber terpercaya untuk menambah wawasanmu tentang kesehatan mental.</p>
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                {videos.map(video => (
                    <div key={video.id} className="bg-white p-4 rounded-lg shadow-sm border">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-3">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <h4 className="font-semibold text-gray-800">{video.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{video.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function EducationArticles() {
    return (
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Artikel Edukasi</h3>
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-3 text-gray-700 leading-relaxed">
                <img 
                    src="https://images.unsplash.com/photo-1579548122214-c13d1995c48b?q=80&w=1974&auto=format&fit=crop" 
                    alt="Ilustrasi kepala dengan bunga-bunga, melambangkan kesehatan mental" 
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <article className="space-y-4">
                    <h4 className="text-2xl font-bold text-blue-800">🧠 Psikologi: Ilmu yang Membantu Kita Memahami Diri dan Orang Lain</h4>
                    
                    <section>
                        <h5 className="font-semibold text-lg text-gray-800">Apa Itu Psikologi?</h5>
                        <p>Psikologi adalah ilmu yang mempelajari perilaku, pikiran, dan proses mental manusia. Tujuan utama psikologi adalah untuk memahami mengapa manusia berpikir, merasa, dan bertindak seperti yang mereka lakukan. Ilmu ini tidak hanya berguna bagi para profesional seperti psikolog atau konselor, tetapi juga sangat bermanfaat dalam kehidupan sehari-hari.</p>
                        <p className="mt-2 p-3 bg-blue-50 border-l-4 border-blue-300 rounded-r-lg text-sm">
                            <strong>Contoh sederhana:</strong> Mengapa seseorang bisa tiba-tiba marah saat lapar? Psikologi menjelaskan hubungan antara emosi dan kebutuhan biologis.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
}

function PsychologyQuiz() {
    const quizQuestions = [
        {
            questionText: 'Saat menghadapi tekanan pekerjaan atau tugas, apa yang biasanya pertama kali kamu rasakan?',
            answerOptions: [
                { answerText: 'Panik dan cemas, pikiran langsung kalut.', score: 1 },
                { answerText: 'Merasa tertantang dan termotivasi untuk segera menyelesaikannya.', score: 3 },
                { answerText: 'Sedikit lelah dan cenderung ingin menundanya sejenak.', score: 2 },
            ],
        },
        {
            questionText: 'Setelah melewati hari yang sangat berat, bagaimana caramu biasanya memulihkan energi?',
            answerOptions: [
                { answerText: 'Menonton film, main game, atau melakukan hobi sendirian.', score: 2 },
                { answerText: 'Berbicara atau curhat dengan teman dekat atau keluarga.', score: 3 },
                { answerText: 'Hanya ingin tidur atau menyendiri tanpa melakukan apa-apa.', score: 1 },
            ],
        },
        {
            questionText: 'Ketika ada masalah yang terus mengganggu pikiranmu, apa yang paling sering kamu lakukan?',
            answerOptions: [
                { answerText: 'Terus memikirkannya berulang-ulang (overthinking).', score: 1 },
                { answerText: 'Mencoba mencari solusi praktis atau melihat dari sudut pandang lain.', score: 3 },
                { answerText: 'Mengalihkan perhatian ke aktivitas lain agar tidak terlalu memikirkannya.', score: 2 },
            ],
        },
        {
            questionText: 'Dalam seminggu, seberapa sering kamu menyisihkan waktu berkualitas untuk dirimu sendiri (me-time)?',
            answerOptions: [
                { answerText: 'Hampir tidak pernah, terlalu banyak urusan.', score: 1 },
                { answerText: 'Beberapa kali, jika ada kesempatan dan waktu luang.', score: 2 },
                { answerText: 'Cukup sering, saya sengaja menjadwalkannya secara rutin.', score: 3 },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (addScore) => {
        setScore(score + addScore);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    const getResult = () => {
        if (score <= 5) {
            return {
                title: "Pejuang yang Butuh Jeda",
                description: "Kamu adalah seorang pejuang yang tangguh dalam menghadapi tekanan. Namun, hasil ini menunjukkan bahwa kamu mungkin sering mengabaikan sinyal lelah dari tubuh dan pikiran. Mengambil jeda bukan berarti menyerah, melainkan mengisi ulang energi agar bisa berjuang lebih baik. Cobalah untuk lebih sering mendengarkan kebutuhan dirimu.",
                color: "bg-red-100 border-red-300 text-red-800"
            };
        } else if (score <= 9) {
            return {
                title: "Penyeimbang yang Baik",
                description: "Kamu sudah memiliki kesadaran yang baik dalam menyeimbangkan antara tantangan dan waktu istirahat. Kamu tahu kapan harus mendorong diri dan kapan harus menarik diri. Terus pertahankan keseimbangan ini, karena ini adalah kunci manajemen stres yang sehat dan berkelanjutan.",
                color: "bg-yellow-100 border-yellow-300 text-yellow-800"
            };
        } else {
            return {
                title: "Manajer Stres yang Sadar",
                description: "Selamat! Kamu menunjukkan pemahaman yang matang dalam mengelola stres. Kamu secara proaktif mencari cara untuk memulihkan energi dan menghadapi masalah dengan konstruktif. Kamu sadar bahwa merawat diri adalah bagian penting dari produktivitas. Bagikan strategimu kepada orang lain!",
                color: "bg-green-100 border-green-300 text-green-800"
            };
        }
    };

    return (
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quiz: Bagaimana Kamu Mengelola Stres?</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
                {showScore ? (
                    <div className="text-center">
                        <div className={`p-4 rounded-lg border-l-4 ${getResult().color}`}>
                            <h4 className="font-bold text-lg">{getResult().title}</h4>
                            <p className="mt-2 text-sm">{getResult().description}</p>
                        </div>
                        <button onClick={restartQuiz} className="mt-6 flex items-center justify-center gap-2 mx-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                            <Icons.RotateCw size={16}/> Ulangi Kuis
                        </button>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="mb-4">
                            <p className="text-sm text-gray-500">Pertanyaan {currentQuestion + 1}/{quizQuestions.length}</p>
                            <h4 className="text-lg font-semibold text-gray-800 mt-1">{quizQuestions[currentQuestion].questionText}</h4>
                        </div>
                        <div className='space-y-3'>
                            {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleAnswerOptionClick(answerOption.score)}
                                    className="w-full text-left bg-white p-4 rounded-lg border border-gray-200 hover:bg-blue-100 hover:border-blue-300 transition"
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

// --- Relaxation Mode Component (Fixed) ---
function RelaxationMode() {
    const [breathingState, setBreathingState] = useState('Mulai');
    const [activeNoise, setActiveNoise] = useState(null);
    const noisePlayers = useRef({});

    // Effect for breathing cycle
    useEffect(() => {
        const breathingCycle = ['Tarik Napas', 'Tahan', 'Hembuskan', 'Tahan'];
        let currentStateIndex = -1;
        let intervalId;

        if (breathingState !== 'Mulai' && breathingState !== 'Hentikan Latihan') {
            const cycle = () => {
                currentStateIndex = (currentStateIndex + 1) % breathingCycle.length;
                setBreathingState(breathingCycle[currentStateIndex]);
            };
            cycle(); // Start immediately
            intervalId = setInterval(cycle, 4000); // 4 seconds per state
        }
        
        return () => clearInterval(intervalId);
    }, [breathingState]);

    // Effect for audio cleanup
    useEffect(() => {
        // Initialize players
        noisePlayers.current = {
            rain: new Tone.Noise("pink").connect(new Tone.AutoFilter("4n").toDestination().start()).set({ volume: -20 }),
            forest: new Tone.Noise("brown").connect(new Tone.AutoFilter({ baseFrequency: 200, octaves: 4 }).toDestination().start()).set({ volume: -25 }),
            waves: new Tone.Noise("white").connect(new Tone.AutoFilter({ baseFrequency: 100, octaves: 6, filter: { type: 'lowpass' } }).toDestination().start()).set({ volume: -18 }),
        };

        // Cleanup function
        return () => {
            Object.values(noisePlayers.current).forEach(player => {
                if (player && player.state === 'started') {
                    player.stop();
                }
                player?.dispose();
            });
        };
    }, []);

    const handleNoisePlay = (type) => {
        Tone.start();
        // Stop any other playing noise
        Object.entries(noisePlayers.current).forEach(([key, player]) => {
            if (key !== type && player.state === 'started') {
                player.stop();
            }
        });

        // Toggle the selected noise
        const player = noisePlayers.current[type];
        if (player.state === 'stopped') {
            player.start();
            setActiveNoise(type);
        } else {
            player.stop();
            setActiveNoise(null);
        }
    };
    
    const stopAllNoise = () => {
         Object.values(noisePlayers.current).forEach(player => {
            if (player.state === 'started') {
                player.stop();
            }
        });
        setActiveNoise(null);
    }

    const getAnimationClass = () => {
        switch (breathingState) {
            case 'Tarik Napas': return 'scale-125';
            case 'Hembuskan': return 'scale-100';
            default: return 'scale-100';
        }
    };
    
    const sounds = [
        { type: 'rain', icon: Icons.CloudRain, label: 'Hujan', color: 'blue' },
        { type: 'forest', icon: Icons.Trees, label: 'Hutan', color: 'green' },
        { type: 'waves', icon: Icons.Waves, label: 'Ombak', color: 'cyan' },
    ];

    const colorClasses = {
        rain: 'bg-blue-100 border-blue-400',
        forest: 'bg-green-100 border-green-400',
        waves: 'bg-cyan-100 border-cyan-400',
    };


    return (
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mode Relaksasi</h3>
            <p className="text-gray-600 mb-6">Temukan ketenangan dengan panduan pernapasan dan suara alam.</p>
            
            <div className="bg-blue-50/50 p-6 rounded-lg text-center">
                <h4 className="font-semibold text-blue-800 mb-4">Panduan Pernapasan Kotak</h4>
                <div className="flex justify-center items-center h-48">
                    <div className={`relative w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center transition-transform duration-[3500ms] ease-in-out ${getAnimationClass()}`}>
                        <div className="absolute inset-0 bg-blue-400/50 rounded-full animate-ping-slow"></div>
                        <span className="text-blue-800 font-bold z-10">{breathingState}</span>
                    </div>
                </div>
                 {breathingState === 'Mulai' ? (
                     <button onClick={() => setBreathingState('Tarik Napas')} className="mt-4 bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition">
                         Mulai Latihan
                     </button>
                 ) : (
                     <button onClick={() => setBreathingState('Mulai')} className="mt-4 bg-gray-500 text-white font-semibold py-2 px-5 rounded-lg hover:bg-gray-600 transition">
                         Hentikan Latihan
                     </button>
                 )}
            </div>

            <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-4">Suara Alam</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {sounds.map(sound => (
                        <button 
                            key={sound.type}
                            onClick={() => handleNoisePlay(sound.type)} 
                            className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition ${activeNoise === sound.type ? colorClasses[sound.type] : 'bg-gray-100 border-transparent hover:border-gray-300'}`}
                        >
                            <sound.icon className="text-gray-600" size={24}/>
                            <span className="text-sm mt-2 font-medium text-gray-700">{sound.label}</span>
                        </button>
                    ))}
                    <button onClick={stopAllNoise} disabled={!activeNoise} className="flex flex-col items-center justify-center p-3 rounded-lg bg-red-100 text-red-700 disabled:bg-gray-100 disabled:text-gray-400 transition">
                        <Icons.StopCircle size={24}/>
                        <span className="text-sm mt-2 font-medium">Hentikan</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

// --- Mood Tracker Component (Updated with Gemini Insight) ---
function MoodTracker({ userId }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [moodData, setMoodData] = useState({});
    const [selectedMood, setSelectedMood] = useState(null);
    const [lastSavedMood, setLastSavedMood] = useState(null);
    const [insight, setInsight] = useState('');
    const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);

    const moods = [
        { name: 'Senang', emoji: '😊' },
        { name: 'Sedih', emoji: '😢' },
        { name: 'Marah', emoji: '😠' },
        { name: 'Cemas', emoji: '😟' },
        { name: 'Biasa', emoji: '😐' },
    ];

    useEffect(() => {
        if (!userId) return;

        const fetchMoods = async () => {
            const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            
            const q = db.collection(`artifacts/${appId}/users/${userId}/moodEntries`)
                .where('timestamp', '>=', startOfMonth)
                .where('timestamp', '<=', endOfMonth);

            const querySnapshot = await q.get();
            const data = {};
            querySnapshot.forEach((doc) => {
                const docData = doc.data();
                if (docData.timestamp) {
                    const date = docData.timestamp.toDate().getDate();
                    data[date] = docData.emoji;
                }
            });
            setMoodData(data);
        };

        fetchMoods();
    }, [userId, currentDate]);

    const handleSaveMood = async () => {
        if (!selectedMood) return;

        const today = new Date();
        const docId = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        
        try {
            await db.doc(`artifacts/${appId}/users/${userId}/moodEntries/${docId}`).set({
                mood: selectedMood.name,
                emoji: selectedMood.emoji,
                timestamp: serverTimestamp()
            });
            setLastSavedMood(selectedMood);
            setInsight(''); // Reset previous insight
            
            const newMoodData = {...moodData};
            newMoodData[today.getDate()] = selectedMood.emoji;
            setMoodData(newMoodData);
            
            setSelectedMood(null);
            
        } catch (error) {
            console.error("Error saving mood:", error);
            setLastSavedMood(null);
        }
    };

    const handleGetInsight = async () => {
        if (!lastSavedMood) return;
        setIsGeneratingInsight(true);

        // Fetch recent moods for context
        const q = db.collection(`artifacts/${appId}/users/${userId}/moodEntries`)
            .orderBy('timestamp', 'desc')
            .limit(5);

        const querySnapshot = await q.get();
        const recentMoods = [];
        querySnapshot.forEach(doc => {
            recentMoods.push(doc.data().mood);
        });
        
        const apiKey = ""; // IMPORTANT: Replace with your Gemini API Key
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const prompt = `Anda adalah ViVeka, chatbot psikologi yang lembut dan empatik. Seorang pengguna baru saja mencatat suasana hatinya hari ini sebagai "${lastSavedMood.name}". Riwayat suasana hati beberapa hari terakhirnya adalah: ${recentMoods.join(', ')}. Berdasarkan informasi ini, berikan wawasan reflektif yang singkat (2-3 kalimat), memvalidasi, dan suportif. Jangan memberi nasihat atau solusi. Fokus pada penerimaan emosi. Mulailah dengan sapaan lembut.`;

        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`API call failed: ${response.status}`);
            const result = await response.json();
            const insightText = result.candidates?.[0]?.content?.parts?.[0]?.text;
            if (insightText) {
                setInsight(insightText);
            } else {
                setInsight("ViVeka sedang merenung sejenak. Coba lagi nanti.");
            }
        } catch (error) {
            console.error("Error getting insight:", error);
            setInsight("Maaf, terjadi sedikit kendala saat mencoba memberikan wawasan.");
        } finally {
            setIsGeneratingInsight(false);
        }
    };

    const changeMonth = (amount) => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + amount, 1));
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

        const days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`blank-${i}`} className="w-10 h-10"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const moodEmoji = moodData[day];
            const isToday = isCurrentMonth && day === today.getDate();
            days.push(
                <div key={day} className={`w-10 h-10 flex items-center justify-center rounded-full relative ${isToday ? 'bg-blue-200' : ''}`}>
                    <span className={`${moodEmoji ? 'opacity-0' : 'opacity-100'}`}>{day}</span>
                    {moodEmoji && <span className="absolute text-2xl">{moodEmoji}</span>}
                </div>
            );
        }
        return days;
    };

    return (
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mood Tracker</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-center text-gray-700">Bagaimana suasana hatimu hari ini?</h4>
                <div className="flex justify-center gap-3 my-4">
                    {moods.map(mood => (
                        <button 
                            key={mood.name} 
                            onClick={() => setSelectedMood(mood)}
                            className={`w-12 h-12 text-3xl rounded-full flex items-center justify-center transition transform hover:scale-110 ${selectedMood?.name === mood.name ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                            title={mood.name}
                        >
                            {mood.emoji}
                        </button>
                    ))}
                </div>
                <button 
                    onClick={handleSaveMood}
                    disabled={!selectedMood}
                    className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
                >
                    Simpan Suasana Hati
                </button>
                {lastSavedMood && !insight && (
                    <div className="text-center mt-4">
                        <p className="text-sm text-green-700">Suasana hatimu ({lastSavedMood.name}) telah disimpan!</p>
                        <button 
                            onClick={handleGetInsight}
                            disabled={isGeneratingInsight}
                            className="mt-2 text-sm bg-blue-100 text-blue-800 py-2 px-3 rounded-lg font-semibold hover:bg-blue-200 transition disabled:bg-gray-200 flex items-center justify-center gap-2 mx-auto"
                        >
                            {isGeneratingInsight ? (
                                <React.Fragment><Icons.Loader2 className="animate-spin" size={16} /> Merenung...</React.Fragment>
                            ) : (
                                <React.Fragment><Icons.Sparkles size={16} /> Dapatkan Wawasan Harian ✨</React.Fragment>
                            )}
                        </button>
                    </div>
                )}
                {insight && (
                    <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-300 rounded-r-lg text-sm">
                        <p className="font-semibold text-blue-800">Wawasan dari ViVeka:</p>
                        <p className="text-blue-900/80 mt-1 italic">"{insight}"</p>
                    </div>
                )}
            </div>

            <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-200"><Icons.ChevronLeft /></button>
                    <h4 className="font-semibold text-gray-800">
                        {currentDate.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}
                    </h4>
                    <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-200"><Icons.ChevronRight /></button>
                </div>
                <div className="grid grid-cols-7 gap-y-2 text-center text-sm text-gray-500 mb-2">
                    <span>Mi</span><span>Se</span><span>Sl</span><span>Ra</span><span>Ka</span><span>Ju</span><span>Sa</span>
                </div>
                <div className="grid grid-cols-7 gap-y-2 text-center">
                    {renderCalendar()}
                </div>
            </div>
        </div>
    );
}

// --- Feature Modal Component (Updated) ---
function FeatureModal({ feature, onClose, userId }) {
    const getFeatureContent = () => {
        switch (feature) {
            case 'notes':
                return { title: null, content: <EmotionJournal userId={userId} /> };
            case 'videos':
                return { title: null, content: <EducationVideos /> };
            case 'articles':
                return { title: null, content: <EducationArticles /> };
            case 'quiz':
                return { title: null, content: <PsychologyQuiz /> };
            case 'relax':
                return { title: null, content: <RelaxationMode /> };
            case 'mood':
                return { title: null, content: <MoodTracker userId={userId} /> };
            // Other cases remain as placeholders
            case 'history': return { title: "Riwayat Chat", content: <p>Riwayat percakapan Anda dengan ViVeka tersimpan secara otomatis dan dapat Anda lihat di layar utama.</p> };
            case 'expert': return { title: "Tanya Pakar (Premium)", content: <p>Anda ingin bicara lebih dalam? Jadwalkan sesi dengan pakar psikologi profesional kami. Fitur ini akan segera tersedia.</p> };
            default: return { title: "Fitur Tidak Ditemukan", content: <p>Fitur yang Anda minta belum tersedia.</p> };
        }
    };

    const { title, content } = getFeatureContent();

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl" onClick={e => e.stopPropagation()}>
                <div className={`p-6 ${!title && 'pt-4'}`}>
                    {title ? (
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                            <button onClick={onClose} className="p-1 rounded-full text-gray-500 hover:bg-gray-200"><Icons.X /></button>
                        </div>
                    ) : (
                         <div className="text-right -mr-2 -mt-2 mb-2">
                             <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-200"><Icons.X /></button>
                         </div>
                    )}
                    <div>{content}</div>
                    <button onClick={onClose} className="mt-6 w-full bg-gray-200 text-gray-800 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition">
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    );
}


// --- Render the main App component to the DOM ---
ReactDOM.render(<App />, document.getElementById('root'));