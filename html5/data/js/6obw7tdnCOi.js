﻿window.globalProvideData('slide', '{"title":"PBL 3","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":7,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide7","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6obw7tdnCOi","actionGroups":{"ReviewInt_6exqkRLUv5K":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"61wP54hwkz7"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6exqkRLUv5K","typea":"var","valueb":"6B1Ptamc6Jo","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"}]}]},"ReviewIntCorrectIncorrect_6exqkRLUv5K":{"kind":"actiongroup","actions":[]},"AnsweredInt_6exqkRLUv5K":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6exqkRLUv5K"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6exqkRLUv5K":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"61wP54hwkz7"},"enabled":{"type":"boolean","value":false}}]},"6exqkRLUv5K_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"656CTYNCjtu.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6exqkRLUv5K"}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6obw7tdnCOi":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5vC7f7UlUos"}}]},"NavigationRestrictionPreviousSlide_6obw7tdnCOi":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6EmYFeZHyVh","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6EmYFeZHyVh","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6exqkRLUv5K","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6exqkRLUv5K"}],"elseActions":[{"kind":"exe_actiongroup","id":"6exqkRLUv5K_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6exqkRLUv5K","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6exqkRLUv5K","typea":"var","valueb":"6B1Ptamc6Jo","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6B1Ptamc6Jo"},"completed_slide_ref":{"type":"string","value":"_player.5VonHi8cR3g.5vC7f7UlUos"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6exqkRLUv5K","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6exqkRLUv5K","typea":"var","valueb":"6B1Ptamc6Jo","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6B1Ptamc6Jo"},"completed_slide_ref":{"type":"string","value":"_player.5VonHi8cR3g.5vC7f7UlUos"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6obw7tdnCOi"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6obw7tdnCOi"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":25000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5sS4vhrCwRF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KSRsYh6QcX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"61wP54hwkz7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62CTTPosOoK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5WRlnoaEjYD"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":23,"id":"01","url":"story_content/6CSBDv3s6xr.png","type":"normal","altText":"mulmed slebew (15).png","width":1920,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":960,"bottom":540,"altText":"mulmed slebew (15).png","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":0,"yPos":0,"width":960,"height":540,"strokewidth":0}},"width":960,"height":540,"resume":true,"useHandCursor":true,"id":"5sS4vhrCwRF"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":24,"id":"01","url":"story_content/5ZFBcVOnl6c.png","type":"normal","altText":"mulmed slebew (34).png","width":1920,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-8,"yPos":6,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":489,"rotateYPos":275,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":978,"bottom":550,"altText":"mulmed slebew (34).png","pngfb":false,"pr":{"l":"Lib","i":52}},"html5data":{"xPos":0,"yPos":0,"width":978,"height":550,"strokewidth":0}},"width":978,"height":550,"resume":true,"useHandCursor":true,"id":"6KSRsYh6QcX"},{"kind":"textinput","bindto":"_player.jawab3","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":5000,"placeholder":" Tuliskan Jawaban Anda!","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":88,"yPos":262,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":355.5,"rotateYPos":95.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"61wP54hwkz7","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":692,"height":192,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":180,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":65}}},"html5data":{"xPos":0,"yPos":0,"width":712,"height":192,"strokewidth":1}},"width":712,"height":192,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":713,"bottom":193,"altText":" Tuliskan Jawaban Anda!","pngfb":false,"pr":{"l":"Lib","i":64}}},"id":"61wP54hwkz7","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.jawab3","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"62CTTPosOoK_1887007872","id":"01","linkId":"txt__default_62CTTPosOoK","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":796,"height":117,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Ceritakan pengalamanmu dalam mengikuti kegiatan gotong-royong, baik di rumah, sekolah, ataupun masyarakat. Kegiatan apakah itu? Apakah kamu menghadapi kesulitan dalam pelaksanaannya? Bagaimana perasaanmu setelah melakukannya?","style":{"fontSize":16,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":22.802,"descent":6.25,"leading":0,"underlinePosition":-1.604,"underlineThickness":1.063,"xHeight":11.417}}],"style":{"justification":"justify","tagType":"P"},"runs":[{"idx":0,"len":225,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":812,"bottom":122,"pngfb":false,"pr":{"l":"Lib","i":67}}}],"shapemaskId":"","xPos":72,"yPos":118,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":408,"rotateYPos":63.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":816,"bottom":127,"altText":"Ceritakan pengalamanmu dalam mengikuti kegiatan gotong-royong, baik di rumah, sekolah, ataupun masyarakat. Kegiatan apakah itu? Apakah kamu menghadapi kesulitan dalam pelaksanaannya? Bagaimana perasaanmu setelah melakukannya?","pngfb":false,"pr":{"l":"Lib","i":66}},"html5data":{"xPos":0,"yPos":0,"width":816,"height":127,"strokewidth":0}},"width":816,"height":127,"resume":true,"useHandCursor":true,"id":"62CTTPosOoK"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"62aCZ4TeSN7_-382077886","id":"01","linkId":"txt__default_5WRlnoaEjYD","type":"acctext","xPos":4,"yPos":2,"xAccOffset":4,"yAccOffset":2,"width":256,"height":36,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"LANJUTKAN","style":{"fontFamily":"\\"ArticulateBold CharBoldC2572EF3\\",\\"Articulate\\"","fontSize":18,"ascent":22.44,"descent":5.328,"leading":0,"underlinePosition":-2.4,"underlineThickness":1.2,"xHeight":12.36,"fontIsBold":false}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":201,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":49}}}],"shapemaskId":"","xPos":16,"yPos":470,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":132,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":266,"bottom":42,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-3,"yPos":-3,"width":269,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":266,"bottom":42,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-3,"yPos":-3,"width":269,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":266,"bottom":42,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-3,"yPos":-3,"width":269,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":264,"bottom":40,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":-1,"yPos":-1,"width":265,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":266,"bottom":42,"altText":"LANJUTKAN","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":-3,"yPos":-3,"width":269,"height":45,"strokewidth":3}}}],"width":264,"height":40,"resume":true,"useHandCursor":true,"id":"5WRlnoaEjYD","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"_player.#jawab3","typea":"var","valueb":"","typeb":"string"}]}]}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5VonHi8cR3g.5vC7f7UlUos"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6exqkRLUv5K_CorrectReview","id":"01","linkId":"6exqkRLUv5K_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":522,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":58}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":57}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6exqkRLUv5K_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6exqkRLUv5K_IncorrectReview","id":"01","linkId":"6exqkRLUv5K_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":531,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":60}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":59}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6exqkRLUv5K_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');