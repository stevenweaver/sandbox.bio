// Manage logging

import { supabase } from "./utils";

// =============================================================================
// Config
// =============================================================================

const PATHS_IGNORE = ["/favicon.ico"];

// =============================================================================
// Utility functions
// =============================================================================

// Log an event and response
export async function logEvent(event, response) {
	const url = new URL(event.request.url);
	const pathname = url.pathname;
	const search = url.search;

	// Ignore certain paths
	if(PATHS_IGNORE.includes(pathname))
		return;

	// Store path and status
	await supabase.from("logs").insert([{
		pathname,
		search,
		status: (await response).status
	}]);
}
