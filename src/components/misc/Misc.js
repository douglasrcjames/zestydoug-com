import { useLocation } from "react-router-dom";
import { analytics } from "../../Fire";
import { useEffect } from "react";

export function FirebaseAnalytics() {
    let location = useLocation();
    useEffect(() => {
        const page_path = location.pathname;
        analytics.logEvent(analytics, "screen_view", {
            firebase_screen: page_path,
        });
    }, [location]);
    return null;
}