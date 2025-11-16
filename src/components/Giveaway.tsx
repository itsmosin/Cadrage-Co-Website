const Giveaway = () => {
  return (
    <>
      <style>{`
        /* Override claimr widget black background to match white theme */
        #claimr-widget-container,
        #claimr-widget-container * {
          background-color: transparent !important;
          color: #1a1a1a !important;
        }
        
        #claimr-widget-container iframe {
          background-color: white !important;
          border-radius: 16px !important;
        }
        
        /* Style any claimr elements to match white theme */
        #claimr-widget-container [class*="claimr"],
        #claimr-widget-container [id*="claimr"] {
          background: white !important;
          color: #1a1a1a !important;
        }
        
        /* Override any dark backgrounds */
        #claimr-widget-container div,
        #claimr-widget-container section,
        #claimr-widget-container form {
          background-color: white !important;
          color: #1a1a1a !important;
        }
        
        /* Style buttons to match theme */
        #claimr-widget-container button {
          background-color: #1a1a1a !important;
          color: white !important;
          border-radius: 8px !important;
          transition: all 0.3s ease !important;
        }
        
        #claimr-widget-container button:hover {
          background-color: #2a2a2a !important;
          transform: translateY(-1px) !important;
        }
        
        /* Style inputs */
        #claimr-widget-container input,
        #claimr-widget-container textarea {
          background-color: #f9f9f9 !important;
          border: 1px solid #e5e5e5 !important;
          color: #1a1a1a !important;
          border-radius: 8px !important;
        }
        
        #claimr-widget-container input:focus,
        #claimr-widget-container textarea:focus {
          border-color: #1a1a1a !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.1) !important;
        }
      `}</style>
      
      <section className="w-full py-16 md:py-24 bg-white border-t border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Beautiful Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-3xl">⚡️</span>
              <h2 className="text-3xl md:text-4xl font-roboto-condensed font-bold text-foreground tracking-tight">
                Join Our Giveaway
              </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-poppins">
              Enter for a chance to win exclusive prizes and connect with our community
            </p>
            <div className="mt-4 h-1 w-16 bg-neutral-300 rounded-full mx-auto opacity-60" />
          </div>

          {/* Claimr Widget Container - Beautiful Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-lg border border-neutral-200 p-6 md:p-10 overflow-hidden relative">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-40" />
              
              {/* Widget Container */}
              <div 
                id="claimr-widget-container" 
                className="min-h-[400px] flex items-center justify-center bg-white rounded-2xl"
              >
                {/* Loading state */}
                <div className="text-center text-muted-foreground">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mb-4"></div>
                  <p className="text-sm font-poppins">Loading giveaway...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional decorative elements */}
          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground font-poppins">
              Terms and conditions apply. Winners will be notified via email.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Giveaway;

