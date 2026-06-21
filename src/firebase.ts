import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY || 'demo-key',
	authDomain: import.meta.env.VITE_authDomain || 'demo.firebaseapp.com',
	projectId: import.meta.env.VITE_projectId || 'demo-project',
	storageBucket: import.meta.env.VITE_storageBucket || 'demo.appspot.com',
	messagingSenderId: import.meta.env.VITE_messagingSenderId || '000000000',
	appId: import.meta.env.VITE_appId || '1:000000000:web:000000',
	measurementId: import.meta.env.VITE_measurementId || 'G-0000000'
};

let analytics:any;
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);


 if (app.name && typeof window !== 'undefined') {
		analytics = getAnalytics(app);
 }

 export { analytics, app };
