Search.setIndex({docnames:["index","modules/core/index","modules/index","modules/parser/beancount.parser.booking","modules/parser/beancount.parser.booking_full","modules/parser/beancount.parser.booking_method","modules/parser/beancount.parser.cmptest","modules/parser/beancount.parser.grammar","modules/parser/beancount.parser.hashsrc","modules/parser/beancount.parser.lexer","modules/parser/beancount.parser.options","modules/parser/beancount.parser.parser","modules/parser/beancount.parser.printer","modules/parser/index","modules/parser/parser","modules/parser/printer","modules/plugins/beancount.plugins.auto","modules/plugins/beancount.plugins.auto_accounts","modules/plugins/beancount.plugins.book_conversions","modules/plugins/beancount.plugins.check_average_cost","modules/plugins/index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules/core/index.rst","modules/index.rst","modules/parser/beancount.parser.booking.rst","modules/parser/beancount.parser.booking_full.rst","modules/parser/beancount.parser.booking_method.rst","modules/parser/beancount.parser.cmptest.rst","modules/parser/beancount.parser.grammar.rst","modules/parser/beancount.parser.hashsrc.rst","modules/parser/beancount.parser.lexer.rst","modules/parser/beancount.parser.options.rst","modules/parser/beancount.parser.parser.rst","modules/parser/beancount.parser.printer.rst","modules/parser/index.rst","modules/parser/parser.rst","modules/parser/printer.rst","modules/plugins/beancount.plugins.auto.rst","modules/plugins/beancount.plugins.auto_accounts.rst","modules/plugins/beancount.plugins.book_conversions.rst","modules/plugins/beancount.plugins.check_average_cost.rst","modules/plugins/index.rst"],objects:{"beancount.parser":{booking:[3,0,0,"-"],booking_full:[4,0,0,"-"],booking_method:[5,0,0,"-"],cmptest:[6,0,0,"-"],grammar:[7,0,0,"-"],hashsrc:[8,0,0,"-"],lexer:[9,0,0,"-"],options:[10,0,0,"-"],parser:[11,0,0,"-"],printer:[15,0,0,"-"]},"beancount.parser.booking":{BookingError:[3,1,1,""],book:[3,3,1,""],validate_inventory_booking:[3,3,1,""],validate_missing_eliminated:[3,3,1,""]},"beancount.parser.booking.BookingError":{entry:[3,2,1,""],message:[3,2,1,""],source:[3,2,1,""]},"beancount.parser.booking_full":{CategorizationError:[4,1,1,""],InterpolationError:[4,1,1,""],MissingType:[4,1,1,""],ReductionError:[4,1,1,""],Refer:[4,1,1,""],SelfReduxError:[4,1,1,""],book:[4,3,1,""],book_reductions:[4,3,1,""],categorize_by_currency:[4,3,1,""],compute_cost_number:[4,3,1,""],convert_costspec_to_cost:[4,3,1,""],get_bucket_currency:[4,3,1,""],has_self_reduction:[4,3,1,""],interpolate_group:[4,3,1,""],replace_currencies:[4,3,1,""]},"beancount.parser.booking_full.CategorizationError":{entry:[4,2,1,""],message:[4,2,1,""],source:[4,2,1,""]},"beancount.parser.booking_full.InterpolationError":{entry:[4,2,1,""],message:[4,2,1,""],source:[4,2,1,""]},"beancount.parser.booking_full.MissingType":{COST_PER:[4,4,1,""],COST_TOTAL:[4,4,1,""],PRICE:[4,4,1,""],UNITS:[4,4,1,""]},"beancount.parser.booking_full.ReductionError":{entry:[4,2,1,""],message:[4,2,1,""],source:[4,2,1,""]},"beancount.parser.booking_full.Refer":{cost_currency:[4,2,1,""],index:[4,2,1,""],price_currency:[4,2,1,""],units_currency:[4,2,1,""]},"beancount.parser.booking_full.SelfReduxError":{entry:[4,2,1,""],message:[4,2,1,""],source:[4,2,1,""]},"beancount.parser.booking_method":{AmbiguousMatchError:[5,1,1,""],booking_method_AVERAGE:[5,3,1,""],booking_method_FIFO:[5,3,1,""],booking_method_LIFO:[5,3,1,""],booking_method_NONE:[5,3,1,""],booking_method_STRICT:[5,3,1,""],handle_ambiguous_matches:[5,3,1,""]},"beancount.parser.booking_method.AmbiguousMatchError":{entry:[5,2,1,""],message:[5,2,1,""],source:[5,2,1,""]},"beancount.parser.cmptest":{TestCase:[6,1,1,""],TestError:[6,5,1,""],assertEqualEntries:[6,3,1,""],assertExcludesEntries:[6,3,1,""],assertIncludesEntries:[6,3,1,""],read_string_or_entries:[6,3,1,""]},"beancount.parser.cmptest.TestCase":{assertEqualEntries:[6,2,1,""],assertExcludesEntries:[6,2,1,""],assertIncludesEntries:[6,2,1,""]},"beancount.parser.grammar":{Builder:[7,1,1,""],CompoundAmount:[7,1,1,""],DeprecatedError:[7,1,1,""],KeyValue:[7,1,1,""],ParserError:[7,1,1,""],ParserSyntaxError:[7,1,1,""],TagsLinks:[7,1,1,""],ValueType:[7,1,1,""],valid_account_regexp:[7,3,1,""]},"beancount.parser.grammar.Builder":{__init__:[7,2,1,""],amount:[7,2,1,""],balance:[7,2,1,""],build_grammar_error:[7,2,1,""],close:[7,2,1,""],commodity:[7,2,1,""],compound_amount:[7,2,1,""],cost_merge:[7,2,1,""],cost_spec:[7,2,1,""],custom:[7,2,1,""],custom_value:[7,2,1,""],dcupdate:[7,2,1,""],document:[7,2,1,""],event:[7,2,1,""],finalize:[7,2,1,""],finalize_tags_links:[7,2,1,""],get_entries:[7,2,1,""],get_invalid_account:[7,2,1,""],get_long_string_maxlines:[7,2,1,""],get_options:[7,2,1,""],handle_list:[7,2,1,""],include:[7,2,1,""],key_value:[7,2,1,""],note:[7,2,1,""],open:[7,2,1,""],option:[7,2,1,""],pad:[7,2,1,""],pipe_deprecated_error:[7,2,1,""],plugin:[7,2,1,""],popmeta:[7,2,1,""],poptag:[7,2,1,""],posting:[7,2,1,""],price:[7,2,1,""],pushmeta:[7,2,1,""],pushtag:[7,2,1,""],query:[7,2,1,""],store_result:[7,2,1,""],tag_link_LINK:[7,2,1,""],tag_link_STRING:[7,2,1,""],tag_link_TAG:[7,2,1,""],tag_link_new:[7,2,1,""],transaction:[7,2,1,""],unpack_txn_strings:[7,2,1,""]},"beancount.parser.grammar.CompoundAmount":{currency:[7,2,1,""],number_per:[7,2,1,""],number_total:[7,2,1,""]},"beancount.parser.grammar.DeprecatedError":{entry:[7,2,1,""],message:[7,2,1,""],source:[7,2,1,""]},"beancount.parser.grammar.KeyValue":{key:[7,2,1,""],value:[7,2,1,""]},"beancount.parser.grammar.ParserError":{entry:[7,2,1,""],message:[7,2,1,""],source:[7,2,1,""]},"beancount.parser.grammar.ParserSyntaxError":{entry:[7,2,1,""],message:[7,2,1,""],source:[7,2,1,""]},"beancount.parser.grammar.TagsLinks":{links:[7,2,1,""],tags:[7,2,1,""]},"beancount.parser.grammar.ValueType":{dtype:[7,2,1,""],value:[7,2,1,""]},"beancount.parser.hashsrc":{check_parser_source_files:[8,3,1,""],hash_parser_source_files:[8,3,1,""]},"beancount.parser.lexer":{LexBuilder:[9,1,1,""],LexerError:[9,1,1,""],lex_iter:[9,3,1,""],lex_iter_string:[9,3,1,""]},"beancount.parser.lexer.LexBuilder":{ACCOUNT:[9,2,1,""],CURRENCY:[9,2,1,""],DATE:[9,2,1,""],KEY:[9,2,1,""],LINK:[9,2,1,""],NUMBER:[9,2,1,""],STRING:[9,2,1,""],TAG:[9,2,1,""],__init__:[9,2,1,""],build_lexer_error:[9,2,1,""],get_invalid_account:[9,2,1,""],get_lexer_location:[9,2,1,""],long_string_maxlines_default:[9,4,1,""]},"beancount.parser.lexer.LexerError":{entry:[9,2,1,""],message:[9,2,1,""],source:[9,2,1,""]},"beancount.parser.options":{Opt:[10,3,1,""],OptDesc:[10,1,1,""],OptGroup:[10,1,1,""],get_account_types:[10,3,1,""],get_current_accounts:[10,3,1,""],get_previous_accounts:[10,3,1,""],list_options:[10,3,1,""],options_validate_booking_method:[10,3,1,""],options_validate_boolean:[10,3,1,""],options_validate_plugin:[10,3,1,""],options_validate_processing_mode:[10,3,1,""],options_validate_tolerance:[10,3,1,""],options_validate_tolerance_map:[10,3,1,""]},"beancount.parser.options.OptDesc":{alias:[10,2,1,""],converter:[10,2,1,""],default_value:[10,2,1,""],deprecated:[10,2,1,""],example_value:[10,2,1,""],name:[10,2,1,""]},"beancount.parser.options.OptGroup":{description:[10,2,1,""],options:[10,2,1,""]},"beancount.parser.parser":{is_entry_incomplete:[11,3,1,""],is_posting_incomplete:[11,3,1,""],parse_doc:[11,3,1,""],parse_file:[11,3,1,""],parse_many:[11,3,1,""],parse_one:[11,3,1,""],parse_string:[11,3,1,""]},"beancount.parser.printer":{EntryPrinter:[15,1,1,""],align_position_strings:[15,3,1,""],format_entry:[15,3,1,""],format_error:[15,3,1,""],print_entries:[15,3,1,""],print_entry:[15,3,1,""],print_error:[15,3,1,""],print_errors:[15,3,1,""],render_source:[15,3,1,""]},"beancount.parser.printer.EntryPrinter":{Balance:[15,2,1,""],Close:[15,2,1,""],Commodity:[15,2,1,""],Custom:[15,2,1,""],Document:[15,2,1,""],Event:[15,2,1,""],META_IGNORE:[15,4,1,""],Note:[15,2,1,""],Open:[15,2,1,""],Pad:[15,2,1,""],Posting:[15,2,1,""],Price:[15,2,1,""],Query:[15,2,1,""],Transaction:[15,2,1,""],__init__:[15,2,1,""],render_posting_strings:[15,2,1,""],write_metadata:[15,2,1,""]},"beancount.plugins":{auto:[16,0,0,"-"],auto_accounts:[17,0,0,"-"],book_conversions:[18,0,0,"-"],check_average_cost:[19,0,0,"-"]},"beancount.plugins.auto_accounts":{auto_insert_open:[17,3,1,""]},"beancount.plugins.book_conversions":{BookConversionError:[18,1,1,""],ConfigError:[18,1,1,""],augment_inventory:[18,3,1,""],book_price_conversions:[18,3,1,""],book_price_conversions_plugin:[18,3,1,""],extract_trades:[18,3,1,""],is_matching:[18,3,1,""],link_entries_with_metadata:[18,3,1,""],main:[18,3,1,""],reduce_inventory:[18,3,1,""]},"beancount.plugins.book_conversions.BookConversionError":{entry:[18,2,1,""],message:[18,2,1,""],source:[18,2,1,""]},"beancount.plugins.book_conversions.ConfigError":{entry:[18,2,1,""],message:[18,2,1,""],source:[18,2,1,""]},"beancount.plugins.check_average_cost":{MatchBasisError:[19,1,1,""],validate_average_cost:[19,3,1,""]},"beancount.plugins.check_average_cost.MatchBasisError":{entry:[19,2,1,""],message:[19,2,1,""],source:[19,2,1,""]},beancount:{core:[1,0,0,"-"],parser:[13,0,0,"-"],plugins:[20,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"abstract":18,"boolean":[4,5,6,10,11,12,14,15,18],"byte":9,"case":[4,6,8,11],"class":[3,4,5,6,7,9,10,12,14,15,18,19],"default":[7,9,10,11],"enum":4,"final":[4,7,12,14,15,18],"float":19,"function":[3,4,5,6,7,8,9,10,11,12,14,15,17,18,19],"import":[7,16,20],"new":[3,4,7,9,10,17,18,19],"return":[3,4,5,6,7,8,9,10,11,12,14,15,17,18,19],"short":[3,18],"true":[4,5,6,7,11,12,14,15,18],"var":11,"while":18,And:11,For:[4,9,11,18],One:7,The:[4,5,7,9,10,11,12,14,15,18,19],Then:18,These:[6,20],Use:18,__automatic__:[12,14,15],__init__:[7,9,12,14,15],_book:4,abl:4,about:[3,18],abov:[4,7],absent:11,accept:[4,7,12,14,15],accord:18,account1:18,account2:18,account:[3,4,5,7,9,10,11,12,14,15,17,18,19],account_nam:9,accounttyp:10,accumul:[3,7],accur:[7,9,12,14,15],achiev:4,actual_entri:6,add:[7,18],added:[7,18],adding:18,affect:4,against:[4,11,18],algorithm:[3,4,5,18],alia:[3,4,5,7,9,10,18,19],align:[12,14,15],align_position_str:[12,14,15],all:[3,4,5,7,9,10,11,12,14,15,16,18],all_match:18,allow:[3,4,6,11,18],allow_incomplet:[6,11],alon:4,along:[7,9],alreadi:5,also:[4,11,16,18],altern:[4,10],altogeth:4,alwai:[11,18],ambigu:[4,5],ambiguousmatcherror:5,amend:7,amount:[3,4,7,11,12,14,15],ani:[4,7,11,19],annot:[11,18],answer:[18,20],ant:[4,5],anymor:18,anyth:8,appear:11,append:[7,9],appli:[4,11,18],appropri:7,approxim:19,aren:8,argument:[4,11],around:[12,14,15],ask:11,assert:[7,19],assertequalentri:6,assertexcludesentri:6,assertincludesentri:6,assertionerror:[6,11],asset:[4,11,18],assets_account:18,assign:18,associ:7,assum:[4,7,18],atribut:[12,14,15],attach:[7,18],attempt:[4,5,9,11],attribut:[4,5,7,11,12,14,15],augment:[4,18],augment_inventori:18,auto:2,auto_account:2,auto_insert_open:17,automat:[11,16,17,18],avail:[7,10],averag:[5,19],back:4,bake:8,balanc:[4,7,10,11,12,14,15],bank:18,barf:11,base:[7,8,18],basi:[11,18,19],basic:1,beancount:[13,14,15,20],becaus:[3,11],been:[3,4,7,11],befor:[4,17,18],behaviour:4,being:[3,7,11,18],best:[12,14,15],beyond:[12,14,15],bit:3,bitcoin:18,book:[2,4,5,6,7,10,11,18,19],book_convers:2,book_price_convers:18,book_price_conversions_plugin:18,book_reduct:4,bookconversionerror:18,booked_post:[4,5],booking_ful:2,booking_method:[2,3],booking_method_averag:5,booking_method_fifo:5,booking_method_lifo:5,booking_method_non:5,booking_method_strict:5,booking_str:7,bookingerror:3,bool:7,both:[4,11,12,14,15],bother:4,branch:18,btc:18,bucket:4,bui:18,build:[7,9],build_grammar_error:7,build_lexer_error:9,builder:[7,9,11],built:[9,18],cad:[12,14,15],calcul:[4,12,14,15],call:[6,18],callback:7,caller:[11,12,14,15],can:[4,9,11,16,17,20],cannot:4,capit:4,care:7,carri:[4,18],cash:4,categor:4,categorizationerror:4,categorize_by_curr:4,charact:[7,12,14,15],check:[3,6,7,8,11,19],check_average_cost:2,check_parser_source_fil:8,choic:[4,9],choos:4,clean:9,close:[7,12,14,15],cmptest:2,code:[5,8,18],column:[10,12,14,15],comment:[7,12,14,15],commiss:4,commod:[7,12,14,15],compar:6,complet:[3,7,11,20],compon:[11,12,14,15],compound:7,compound_amount:7,compoundamount:7,comput:[4,8,11],compute_cost_numb:4,config:18,config_str:19,configerror:18,configur:[4,7,18,19],consid:[4,11],consist:11,constant:11,constrain:19,constraint:[4,7],constructor:10,contain:[4,6,10,11,12,14,15,18],content:[0,2,3,4,7,9,11,13],context:[7,19],contrast:11,contriv:19,conveni:[12,14,15,17],convers:[10,11,12,14,15,18],convert:[4,9,10,11,18],convert_costspec_to_cost:4,core:[0,2,11,18],correct:4,correctli:4,correspond:[4,5,7,8,11,18],cost:[3,4,5,7,11,12,14,15,17,18,19],cost_comp_list:7,cost_curr:4,cost_merg:7,cost_per:4,cost_spec:7,cost_tot:4,costspec:[4,7,11],could:[4,5],cours:11,creat:[7,9,18],creativ:20,currenc:[4,7,9,10,11,12,14,15,18],currency_nam:9,current:[7,8,10,18],custom:[7,12,14,15,18],custom_valu:7,dai:9,dangl:9,data:[1,3,4,7,11,12,14,15,18],datatyp:7,date:[4,7,8,9,11,17],datetim:[7,9],dcontext:[12,14,15],dcupdat:7,debug:[12,14,15],decim:[4,7,9,11,18],declar:[4,7,10],decod:9,decor:11,dedent:11,deem:9,default_valu:10,defin:[4,17],demand:9,demo:17,depend:11,deprec:[7,10],deprecatederror:7,deriv:4,describ:4,descript:[4,7,10],destruct:18,detail:[4,9,18],detect:[3,9,11,12,14,15],develop:18,diagnos:11,dict:[3,4,7,10,11,12,14,15,17,18],did:4,differ:[8,18],difficult:[3,18],dir_typ:7,direct:[3,6,7,11,12,14,15,17,18,19],directli:8,directori:8,dirti:16,disambigu:4,discard:9,dispatch:5,displai:7,displaycontext:[12,14,15],distinct:4,doc:18,docstr:[11,18],document:[7,12,14,15],document_filenam:7,doe:[3,7,11,12,14,15,18],doing:[11,16,17],don:[8,9,18],done:[9,18],dtype:7,dure:[3,4,11],each:[4,7,8,18],earli:4,earn:10,easi:18,easili:4,editor:[12,14,15],eindex:18,either:[6,7,12,14,15],elid:11,elimin:3,emac:[12,14,15],empti:7,encod:9,encount:11,enough:5,ensur:[5,19],entri:[1,3,4,5,6,7,9,11,12,14,15,17,18,19,20],entries_or_str:6,entryprint:[12,14,15],error:[3,4,5,6,7,9,11,12,14,15,17,18,19],essenti:4,event:[7,12,14,15],event_typ:7,eventu:[9,18],exactli:6,exammpl:11,exampl:[4,11,12,14,15,18,20],example_valu:10,exc_traceback:7,exc_typ:[7,9],exc_valu:7,except:[4,6,7,9],exclud:[12,14,15],excvalu:7,exist:[3,9,19],expect:[7,11],expect_error:11,expected_entri:6,expens:[4,18],experi:20,experiment:4,explain:[12,14,15],explicit:17,explicitli:4,express:7,extens:8,extra:[6,11],extract:[10,11,18],extract_trad:18,factori:11,fail:[4,6,7,11],failfunc:6,failur:6,fallback:18,fals:[6,7,10,11,12,14,15],featur:[4,11,20],feed:4,few:4,field:[3,4,5,7,9,10,11,18,19],fifo:[4,5,18],figru:18,figur:4,file:[7,8,9,11,12,13,14,15,18],filenam:[7,9,11,12,14,15],fill:[4,11],filter:20,finalize_tags_link:7,find:[3,4,5,11,18],first:[4,12,14,15,17,19],flag:[7,12,14,15],flag_account:[12,14,15],flush:[12,14,15],follow:[11,12,14,15],format:[10,12,14,15,18],format_entri:[12,14,15],format_error:[12,14,15],found:[11,18,19],frequent:4,from:[4,5,7,8,10,11,12,14,15,17,18],front:11,fulfil:[5,18],full:[4,5,18],fulli:18,furiu:18,further:[7,12,14,15],furthermor:11,futur:[3,18],gain:4,gener:[4,5,7,11,18],get:[7,11],get_account_typ:10,get_bucket_curr:4,get_current_account:10,get_entri:7,get_invalid_account:[7,9],get_lexer_loc:9,get_long_string_maxlin:7,get_opt:7,get_previous_account:10,given:[4,9,12,14,15,18],goe:8,grammar:[2,11],grammar_test:11,great:3,group:4,group_post:4,hack:18,hand:4,handl:[4,5,7,18],handle_ambiguous_match:5,handle_list:7,has:[4,11,12,14,15,18],has_self_reduct:4,hash:8,hash_parser_source_fil:8,hashsrc:2,have:[3,4,7,11,12,14,15],held:[4,18],help:[4,7,9,11,12,14,15],helper:[12,14,15],here:[4,7,9,18,19],hexadecim:8,histor:4,hool:[4,11,12,14,15],hope:18,hopefulli:7,hous:18,how:[4,11,18,20],howev:[3,11,18],http:18,hunch:4,ideal:19,ident:9,identifi:[9,18],ignor:[8,11],impact:7,implement:[4,5,6,18,19],implicitli:17,improv:4,inadvert:11,includ:[4,6,7,12,14,15],include_filenam:7,include_nam:7,incom:[4,18],income_account:18,incomplet:[3,4,6,7],incomplete_entri:3,incur:18,index:[0,4,18],indic:[7,11],infer:4,info:7,inform:11,inherit:4,initi:[7,9,12,14,15,17],input:[4,6,7,9,11,12,13,14,15,18],input_str:9,insert:[7,17,18],inspect:[4,18],instal:[8,20],instanc:[4,5,7,9,10,11,12,14,15,17,18],instead:[11,18],insuffici:5,integ:[9,12,14,15],intend:19,interest:17,interfac:[12,14,15],intermedi:17,intern:[4,12,14,15],interpol:[3,4,11],interpolate_group:4,interpolationerror:4,interpret:[12,14,15],invalid:[9,10],inventori:[3,4,5,11,18,19],invers:16,invest:4,invok:11,is_entry_incomplet:11,is_match:18,is_posting_incomplet:11,is_tot:7,isn:4,issu:[7,8],istot:7,item:4,iter:9,its:[4,7,9,11,12,14,15],itself:[4,6,7,9,18],just:[4,6,11,16,20],keep:[9,18],kei:[7,9],key_valu:7,keyvalu:7,keyword:11,known:5,kvlist:7,label:[7,11],later:[4,7],lax:16,leak:19,leav:[4,11,12,14,15],ledger:[9,10,11],left:[3,4,11,12,14,15],leg:19,letter:[12,14,15],level:11,lex_it:9,lex_iter_str:9,lexbuild:9,lexer:[2,7],lexererror:9,lifo:[5,18],light:6,like:[4,11],line:[7,9,12,14,15],lineno:[7,12,14,15],link:[7,9,18],link_entries_with_metadata:18,list:[1,3,4,5,6,7,9,11,12,14,15,17,18,19,20],list_opt:10,lit:4,live:18,load:[8,11],loader:11,locat:[8,12,14,15],log:4,long_string_maxlines_default:9,longer:7,look:4,loop:[3,4],loss:18,lot:[3,4,7,11,18],macro:16,mai:[4,7,11,12,14,15,18],mail:[18,20],main:[3,7,18],maintain:[17,18],mani:4,manual:[4,19],map:[3,4,5,7,10,19],mark:[12,14,15],match:[3,4,5,7,8,9,11,18,19],matchbasiserror:19,mean:11,meant:[9,20],merg:[7,11],messag:[3,4,5,7,9,12,14,15,18,19],meta:[7,12,14,15],meta_ignor:[12,14,15],metadata:[7,11,12,14,15,18],method:[3,4,5,7,10,12,14,15,18,19],methodnam:6,might:[4,9],min_width_account:[12,14,15],minim:11,minimum:[12,14,15],miss:[3,4,6,11],missingtyp:4,mistak:3,mode:10,modif:7,modifi:18,modul:[0,7,8,13,17,18],moment:18,month:9,more:[4,17,18],moreov:4,most:7,much:[4,19],multi:[12,14,15],multipl:[4,18],must:[4,11],mutat:7,mxn:11,name:[3,4,5,7,9,10,11,12,14,15,18],namedtupl:[7,12,14,15],narrat:7,nativ:18,necessari:[12,14,15],need:[4,7,8,9,18],neg:[3,18],never:[6,11,18],new_object:7,newer:18,next:4,nice:[10,12,14,15],non:11,none:[4,5,7,9,10,11,12,14,15,19],nor:11,normal:11,note:[4,7,11,12,14,15,18,19],noth:[9,11],now:[3,4,9,18],number:[3,4,5,7,9,10,11,12,14,15,18,19],number_p:7,number_tot:7,object:[1,7,9,10,12,14,15],object_list:7,observ:4,occur:[4,6,7,9],off:[7,20],oldest:4,omit:11,one:[4,7,9,10,11,18,20],ones:7,onli:[3,4,7,8,9,11,17,18],open:[7,12,14,15,17],opt:10,optdesc:10,optgroup:10,option:[2,3,7,9,11,12,14,15,17,18,19,20],options_map:[3,4,7,18,19],options_validate_booking_method:10,options_validate_boolean:10,options_validate_plugin:10,options_validate_processing_mod:10,options_validate_toler:10,options_validate_tolerance_map:10,order:[4,7,8,18],origin:4,oss:[12,14,15],other:[4,6,8,11,12,14,15,18,19],otherwis:[3,4,9,11,18],ought:18,out:[4,8,11,18],output:[4,9,11,17],outset:4,over:[4,7],overrid:11,overridden:9,own:18,pad:[7,12,14,15],page:0,pair:[3,4,5,7,10,12,14,15,18],paramet:[3,4,5,6,7,9,10,11,12,14,15,17,18,19],parent:[4,5,7,18],pars:[4,7,9,11,18],parse_doc:11,parse_fil:11,parse_mani:11,parse_on:11,parse_str:[6,11],parser:[0,2,17],parsererror:7,parsersyntaxerror:7,part:11,partial:19,particular:[4,5,11,18],pass:7,paye:7,pedant:[3,16],pend:[7,9,18],pending_lot:18,peopl:8,per:[4,7,11],perform:[6,7],perhap:[12,14,15],pipe:7,pipe_deprecated_error:7,place:[7,18],placehold:9,plugin:[0,2,7,10,11],plugin_config:7,plugin_nam:7,pnl:18,point:7,pop:7,popmeta:7,poptag:7,portion:11,posit:[3,4,5,7,11,12,14,15,18],position_str:[12,14,15],possibl:[3,4,7,11,17],post:[3,4,5,7,11,12,14,15,17,18,19],posting_or_kv_list:7,potenti:4,prefer:18,prefix:[10,12,14,15],prepar:4,presenc:11,present:4,preserv:19,previou:10,price:[4,7,11,12,14,15,17,18],price_curr:4,print:[6,9,10,12,14,15],print_entri:[12,14,15],print_error:[12,14,15],printer:[2,13,14],probabl:[4,8,18],problem:[4,11,20],process:[3,4,7,9,10,18],produc:[3,4,7,10,11],profit:18,progress:20,properti:[3,4,5,7,9,10,18,19],propos:18,provid:[10,11,18,19],purchas:18,purpos:[12,14,15,18],push:7,pushmeta:7,pushtag:7,put:[4,16],python:8,quantiti:18,queri:[7,12,14,15],query_nam:7,query_str:7,question:[18,20],quick:[16,18],quot:9,rais:[6,10,11],rather:[11,20],read:6,read_string_or_entri:6,realiz:18,realli:[7,18],rebuild:8,recommend:11,recompil:8,recurs:7,reduc:[3,4,5,11,18,19],reduce_inventori:18,reduct:[4,5],reductionerror:4,refer:[4,11],refer_group:4,regard:4,regexp:7,regular:7,reject:7,relat:7,relev:8,remain:4,remov:[7,11,17],render:[12,14,15],render_posting_str:[12,14,15],render_sourc:[12,14,15],render_weight:[12,14,15],replac:[4,7,9,11],replace_curr:4,report:[4,7,18],report_filenam:11,repres:[1,9,12,14,15],requir:[3,4,11,18],resolv:4,restrict:18,result:[3,4,6,7,18],reus:[9,18],review:18,rewrit:18,right:3,root:9,routin:[3,4,7,11],rule:7,run:[4,6,8,9,11,18],runtest:6,sale:18,same:[6,7,11,12,14,15,18],sanit:7,script:6,search:0,second:4,see:[4,7,9,10,11,12,14,15,16,18],seen:7,select:[4,20],self:[4,7,9,12,14,15],selfreduxerror:4,sell:18,semant:11,sens:16,sentinel:7,separ:4,set:[4,7,11,17],share:[4,7,11],should:[4,6,8,11,12,14,15,18],show:18,signatur:[7,9,12,14,15],similar:11,simpl:[9,11],simpli:[9,11,17,18,19],simultan:11,singl:[4,11,12,14,15,18],skip:4,slightli:11,snippet:11,solv:20,some:[3,4,9,11,16,18],someth:18,somewaht:4,sort:7,sourc:[3,4,5,6,7,8,9,10,11,12,14,15,17,18,19],source_account:7,space:4,spec:5,special:[11,18],specif:[4,11],specifi:[4,7,9,11],spread:3,sql:7,stack:[7,11,12,14,15],stage:4,start:7,step:[4,17,19],still:4,store:[7,11],store_result:7,str:[7,9],strict:[3,5],strictli:18,string:[4,6,7,8,9,10,11,12,14,15,18,19],stripe:4,structur:[1,12,14,15],subsequ:3,subset_entri:6,succe:4,succeed:7,success:10,suffici:18,sum:19,support:[3,6,7,18],syntax:[7,9,11,12,14,15,18],synthes:17,tag:[7,9],tag_link_link:7,tag_link_new:7,tag_link_str:7,tag_link_tag:7,tags_link:7,tagslink:7,take:[7,9],target:4,tax:18,tbe:20,tell:11,test:[6,11,16],testcas:6,testerror:6,testincompleteinput:11,text:[9,10,11,12,14,15],than:[4,17],thei:[4,6,7,11],them:[4,12,14,15,18],therefor:4,thi:[3,4,5,7,8,9,11,12,14,15,16,17,18,19],thing:11,those:[5,9,11,18],though:18,three:[12,14,15],through:[6,11,19],thu:11,time:[7,8],token:[7,9],toler:[4,7,10],too:[4,19],total:[4,7,11,19],toward:19,traceback:7,trade:[3,18],transact:[4,5,7,12,14,15,17,18,19,20],transform:18,treatment:6,tree:11,trigger:[8,9,16],tripl:[5,7],tupl:[4,7,9,10,11,12,14,15,18],two:[4,6,11],txn_string:7,type:[4,5,7,9,10,11,12,14,15,16],unambigu:4,unbalanc:4,unbook:19,undefin:4,under:4,underspecifi:4,uninterpol:4,uniqu:8,unit:[3,4,7,11,18],units_curr:4,unmatch:19,unmodifi:4,unpack:7,unpack_txn_str:7,unset:[7,11],until:[4,11],unus:17,unused_options_map:[3,17,19],updat:7,uppercas:[12,14,15],usd:[4,11,12,14,15,18],use:[4,9,18],used:[4,5,6,7,8,9,11,12,14,15,17,18,19],useful:[4,8,16],user:[3,9,11],uses:[11,18],using:[4,18,19,20],util:6,valid:[3,4,7,9,10,11],valid_account_regexp:7,validate_average_cost:19,validate_inventory_book:3,validate_missing_elimin:3,valu:[4,7,10,11],valueerror:10,valuetyp:7,vari:11,variou:[7,20],verbos:6,veri:[7,18],verif:7,verifi:8,version:19,via:[18,20],wai:[3,4,12,14,15,18,20],want:[3,11],warn:[7,8,9],weight:[4,6,12,14,15],weight_str:[12,14,15],well:11,were:[4,11,18,19],what:19,when:[3,4,7,8,9,16,17,18],where:7,which:[4,5,6,7,8,11,12,14,15,16,18],whitespac:11,whose:[5,18],width:[12,14,15],within:[6,18],without:[4,12,14,15,19],won:4,word:[12,14,15,19],work:[4,11,20],would:[3,4,11,18,19],write:[12,14,15],write_metadata:[12,14,15],year:9,yield:9,you:[4,8,11,16,18,19],your:[8,9,17,18]},titles:["Welcome to Beancount\u2019s documentation!","Beancount Core","Beancount Modules","beancount.parser.booking","beancount.parser.booking_full","beancount.parser.booking_method","beancount.parser.cmptest","beancount.parser.grammar","beancount.parser.hashsrc","beancount.parser.lexer","beancount.parser.options","beancount.parser.parser","beancount.parser.printer","Parser","parser.parser","parser.printer","beancount.plugins.auto","beancount.plugins.auto_accounts","beancount.plugins.book_conversions","beancount.plugins.check_average_cost","Plugins"],titleterms:{auto:16,auto_account:17,beancount:[0,1,2,3,4,5,6,7,8,9,10,11,12,16,17,18,19],book:3,book_convers:18,booking_ful:4,booking_method:5,check_average_cost:19,cmptest:6,core:1,document:0,grammar:7,hashsrc:8,incomplet:11,indic:0,lexer:9,modul:2,object:11,option:10,parser:[3,4,5,6,7,8,9,10,11,12,13,14,15],plugin:[16,17,18,19,20],printer:[12,15],tabl:0,transact:11,welcom:0}})