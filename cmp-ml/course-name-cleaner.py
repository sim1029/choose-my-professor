import pandas as pd



filtered_departments = {
    'ABNORPSYC' : 'PSY',
    'ABPSY' : 'PSY',
    'ACCADV' : 'IFR',
    'ACCFIN' : 'BUSERV',
    'ACCG' : 'BUSACC',
    'ACCOUNTING' : 'BUSACC',
    'ACCSECT' : 'BUSACC',
    'CALC' : 'MATH',
    'CRITICALWRITIN' : 'ENGCMP',
    'CRITICALWRITING' : 'ENGCMP',
    'COMP' : 'ENGCMP',
    'FICT': 'ENGWRT',
    'FICTION': 'ENGWRT',
    'FICTIONWRITING' : 'ENGWRT',
    'FICTIONWRT': 'ENGWRT',
    'FICTWRT': 'ENGWRT',
    'ENCMP': 'ENGCMP',
    'CALCCAL' : 'MATH',
    'CALCI' : 'MATH',
    'CALCII' : 'MATH',
    'CALCIII' : 'MATH',
    'CALCMATH' : 'MATH',
    'CALCUCALC' : 'MATH',
    'CALCULAS' : 'MATH',
    'CALCULUS' : 'MATH',
    'CHEMCHEM' : 'CHEM',
    'CHEMFORNURSES' : 'CHEM',
    'CHEMII' : 'CHEM',
    'CHEMISECT' : 'CHEM',
    'CHEMISTRY' : 'CHEM',
    'CHEMLAB' : 'CHEM',
    'CHEMSCI' : 'CHEM',
    'CHEMSECT' : 'CHEM',
    'CHEN' : 'CHEM',
    'CHILDBOOKS' : 'ENGLIT',
    'CHILDCULT' : 'ENGLIT',
    'CHILDHOODBOOKS' : 'ENGLIT',
    'GENERALCHEM' : 'CHEM',
    'GENWRITIN' : 'ENGCMP',
    'GENWRT' : 'ENGCMP',
    'GENWRTG' : 'ENGCMP',
    'GAMETHEORY' : 'ECON',
    'GAMETHRY' : 'ECON',
    'GEOLOGY' : 'GEOL',
    'SPORTECON' : 'ECON',
    'WRIT' : 'ENGCMP',
    'WRITERSJOURNAL' : 'ENGCMP',
    'WRITI' : 'ENGCMP',
    'WRITING' : 'ENGCMP',
    'WRITINGREVIEW' : 'ENGCMP',
    'WRITINGSEMINAR' : 'ENGCMP',
    'WRT' : 'ENGCMP',
    'SPA' : 'SPAN',
    'SOCIALPSYCH' : 'PSY',
    'PSYCHLAB' : 'PSY',
    'PSYCHBIO' : 'PSY',
    'PSYCHDEV' : 'PSY',
    'PSYCHGRAD' : 'PSY',
    'PSYCHINTR' : 'PSY',
    'PSYCHOFBLACK' : 'PSY',
    'PSYCHOLOGY' : 'PSY',
    'PSYCHSOC' : 'PSY',
    'PSYED' : 'PSY',
    'PSYSOC' : 'PSY',
    'PUBLICSPEAK' : 'COMMRC',
    'PUBLICSPEAKING' : 'COMMRC',
    'PUBLSPKG' : 'COMMRC',
    'PUBSERV' : 'PUBSRV',
    'PUBSPEAK' : 'COMMRC',
    'PUBSPK' : 'COMMRC',
    'PUBSV': 'PUBSRV',
    'PUBSR' : 'PUBSRV',
    'PYS' : 'PSY',
    'PYSC' : 'PSY',
    'RELGS': 'RELGST',
    'RELGIOUSST' : 'RELGST',
    'RELGSCHRI' : 'RELGST',
    'RELGSSECT' : 'RELGST',
    'RELGSTO' : 'RELGST',
    'RELGSVARI' : 'RELGST',
    'RELIG' : 'RELGST',
    'RELIGHOLOCAUST' : 'RELGST',
    'RELIGST' : 'RELGST',
    'RELIGSTUDIES' : 'RELGST',
    'RELST' : 'RELGST',
    'RESTUD' : 'RELGST',
    'REVIEWWRITING' : 'ENGCMP',
    'RUSFAIRYTALES' : 'RUSS',
    'RUSSRUSS' : 'RUSS',
    'RUSSLIT' : 'RUSS',
    'RUSSREVOLUTION' : 'RUSS',
    'RUSFILM' : 'RUSS',
    'RUSSREVOLUTION' : 'RUSS',
    'RUSSCULT' : 'RUSS',
    'RUSSFAIRYTALE' : 'RUSS',
    'RUSSHIST' : 'RUSS',
    'RUSSHST' : 'RUSS',
    'RUSSIACISEU' : 'RUSS',
    'RUSSIAN' : 'RUSS',
    'RUSSIANCULTURE' : 'RUSS',
    'RUSSIANFAIRYT' : 'RUSS',
    'RUSSIANHISTORY' : 'RUSS',
    'RUSSIATO' : 'RUSS',
    'RUSSIEU' : 'RUSS',
    'RUSSYR' : 'RUSS',
    'SPANCIV' : 'SPAN',
    'SPANCONV' : 'SPAN',
    'SOCAGIN' : 'SOC',
    'SOCDEV' : 'SOC',
    'SOCENV' : 'SOC',
    'SOCFA' : 'SOC',
    'SOCFAM' : 'SOC',
    'SOCFAMILY' : 'SOC',
    'SOCI' : 'SOC',
    'SOCIALIMP' : 'SOC',
    'SOCIALPHIL' : 'SOC',
    'SOCIALPROBLEMS' : 'SOC',
    'SOCIOLOGY' : 'SOC',
    'SOCOFELIFE' : 'SOC',
    'SOCOFEVERYDAY' : 'SOC',
    'SOCOFFAMILY' : 'SOC',
    'SOCOFFAMIY' : 'SOC',
    'SOCOFGENDCWR' : 'SOC',
    'SOCOFRELIGION' : 'SOC',
    'SOCOFSPORTS' : 'SOC',
    'SOCOFSPORTS' : 'SOC',
    'SOFTWAREENG' : 'CS',
    'SOCPHIL' : 'PHIL',
    'SOCPHILOSOPHY' : 'SOC',
    'STATS' : 'STAT',
    'STATSECT' : 'STAT',
    'STATSII' : 'STAT',
    'STATSTAT' : 'STAT',
    'STRATCOST' : 'BUSACC',
    'STRATEGICCOST' : 'BUSACC',
    'WEBDESIGN' : 'CS',
    'WEBSERVICES' : 'INFSCI',
    'INTROSOCIALPSY' : 'PSY',
    'HISTSPORTS' : 'HIST',
    'INFSC' : 'INFSCI',
    'HISTJAZZ' : 'MUSIC',
    'INTROPHYSICSI': 'PHYS',
    'HISTOJAZ' : 'MUSIC',
    'FRESHCOMP' : 'ENGCMP',
    'ENGRPHYSICSII' : 'PHYS',
    'DATASTRUC' : 'CS',
    'DATASTRUCTURES' : 'CS',
    'DATABASE' : 'CS',
    'COGPSY' : 'PSY',
    'COGPSYCH' : 'PSY',
    'CLINICALPSYCH' : 'PSY',
    'COGNITIVEPSYCH' : 'PSY',
    'CLASSIC' : 'CLASS',
    'CLASSICS' : 'CLASS',
    'CLASSMYTH' : 'CLASS',
    'CLASSMYTHOLOGY' : 'CLASS',
    'COLLALG' : 'MATH',
    'COLLBAR' : 'MATH',
    'COLLBARG' : 'MATH',
    'COLLEGEALG' : 'MATH',
    'COLLEGEALGEBRA' : 'MATH',
    'COLLEGEALGERBA' : 'MATH',
    'ECONOMETRICS' : 'ECON',
    'ECONMACRO' : 'ECON',
    'ENGCOM' : 'ENGCMP',
    'ENGCM' : 'ENGCMP',
    'FILM' : 'FMST',
    'SOCSOC' : 'SOC',
    'PHIIL' : 'PHIL',
    'STATBUS' : 'STAT',
    'PSYCSOC' : 'PSY',
    'SPANI' : 'SPAN',
    'STATA' : 'STAT',
    'STATICS' : 'STAT',
    'PSPS' : 'PS',
    'PSSECT' : 'PS',
    'PSSPEC' : 'PS',
    'PSTHEORY' : 'PS',
    'PSW' : 'PS',
    'PSYC' : 'PSY',
    'PSYCH' : 'PSY',
    'PSAPP' : 'PS',
    'PSCAPSTONE' : 'PS',
    'SOCIALPSY' : 'PSY',
    'LINEARALGEBRA' : 'MATH',
    'MATHSECT' : 'MATH',
    'MASSCOM' : 'COMMRC',
    'MASSCOMM' : 'COMMRC',
    'MATHCALC' : 'MATH',
    'MATHEMATICS' : 'MATH',
    'MATHMAT' : 'MATH',
    'MATHSECT' : 'MATH',
    'FRE' : 'FR',
    'FREN' : 'FR',
    'FRENC' : 'FR',
    'FRENCFREN' : 'FR',
    'FRENCH' : 'FR',
    'GENERALBIO' : 'BIOSC',
    'CACLTEHS' : 'MATH',
    'CALCANDALG' : 'MATH',
    'BCALC' : 'MATH',
    'SPANISH' : 'SPAN',
    'SPANISHI' : 'SPAN',
    'SPANLIT' : 'SPAN',
    'SPANN' : 'SPAN',
    'SPANSPAM' : 'SPAN',
    'SPORTHISTORY' : 'HIST',
    'URBANST' : 'URBNST',
    'URBANSOC' : 'URBNST',
    'URBANGOVT' : 'URBNST',
    'URBANGOV' : 'URBNST',
    'URBAN' : 'URBNST',
    'URBSOC' : 'URBNST',
    'USHIS' : 'HIST',
    'USHIST' : 'HIST',
    'USHISTORY' : 'HIST',
    'USHOLOCAUST' : 'HIST',
    'USSINCE' : 'HIST',
    'PUBSPKG' : 'COMMRC',
    'PSCY' : 'PSY',
    'MUSICO' : 'MUSIC',
    'INTOTOPSYCH' : 'PSY',
    'INTOPUBSRV' : 'PUBSRV',
    'HONOCHEM' : 'CHEM',
    'HONPHYS' : 'PHYS',
    'DRUGSBEHAVIOR': 'NROSCI',
    'CULTURALANTRHO' : 'ANTH',
    'BIOSCBIOI' : 'BIOSC',
    'BIOSCI' : 'BIOSC',
    'BIOSCLAB' : 'BIOSC',
    'BIOSCO' : 'BIOSC',
    'BIOTRANS' : 'BIOSC',
    'BIOTRANSPORT' : 'BIOSC',
    'BIOWRITING' : 'BIOSC',
    'BISCO' : 'BIOSC',
    'BUSINESSCALCUL' : 'MATH',
    'CALCBUS' : 'MATH',
    'ECOMP' : 'ENGCMP',
    'CHINESEART' : 'CHIN',
    'ENGLISH' : 'ENGCMP',
    'EE' : 'ECE',
    'ENGCMRLIG' : 'ENGCMP',
    'ENGCMCHCO' : 'ENGCMP',
    'EGCMP' : 'ENGCMP',
    'CULTANTHRO' : 'ANTH',
    'BUSINESS' : 'BUS',
    'HISTRUSSI' : 'RUS',
    'GEO' : 'GEOL',
    'ENGCOMPFILM' : 'ENGFLM',
    'ECOLOGY' : 'BIOSC',
    'INTROPSYCH' : 'PSY',
    'INTROECONOMICS' : 'ECON',
    'BIOE' : 'BIOENG',
    'COMMR' : 'COMMRC',
    'BUSMATH' : 'MATH',
    'CREATIVEW' : 'ENGCMP',
    'CLASSSECT' : 'CLASS',
    'RLGST' : 'RELGST',
    'MKT' : 'BUSMKT',
    'JAP' : 'JPNSE',
    'JAPANESE' : 'JPNSE',
    'JAPANESEREC' : 'JPNSE',
    'JAPANESETWO' : 'JPNSE',
    'JAPNS' : 'JPNSE',
    'JAVAINFS' : 'CS',
    'JPN' : 'JPNSE',
    'JPNESE' : 'JPNSE',
    'JPNSEREC' : 'JPNSE',
    'JPSE' : 'JPNSE',
    'BIOLOGY' : 'BIOSC',
    'ACCT' : 'CDACCT',
    'AMERICANPOLITI' : 'PS',
    'ADVCALC' : 'MATH',
    'AMERLIT' : 'ENGLIT',
    'BIOETRANSPORT' : 'BIOENG',
    'COMPSCI' : 'CS',
    'COMPOSITION' : 'ENGCMP',
    'COMMC' : 'COMMRC',
    'ENG' : 'ENGR',
    'ENGINEER' : 'ENGR',
    'ENGINEERIN' : 'ENGR',
    'ENGINEERING' : 'ENGR',
    'ENGRANALYSIS' : 'ENGR',
    'ENGRPROG' : 'ENGR',
    'ENGLISHCOMP' : 'ENGCMP',
    'FRENCHNOVEL' : 'FR',
    'ENGMP' : 'ENGR',
    'HISTOFPGH' : 'HIST',
    'HISTWWI' : 'HIST',
    'HISTORYOFPITT' : 'HIST',
    'HISTEUROFAMLY' : 'HIST',
    'HISTHOLO' : 'HIST',
    'HISTTO' : 'HIST',
    'HISTSOV' : 'HIST',
    'HISTSINCE' : 'HIST',
    'HISTMODER' : 'HIST',
    'HMATH' : 'MATH',
    'HISTWWI' : 'HIST',
    'INTROAFRCNA' : 'AFRCNA',
    'INTROAFRICANA' : 'AFRCNA',
    'HST' : 'HIST',
    'GERM' : 'GER',
    'GERMA' : 'GER',
    'GERMAGERM' : 'GER',
    'GERMAN' : 'GER',
    'GERMANHISTORY' : 'GER',
    'GERMANICMLS' : 'GER',
    'GERMANPHILOSPH' : 'GER',
    'GERMYTH' : 'GER',
    'GERMYTHS' : 'GER',
    'INFOSCI' : 'INFSCI',
    'HISTLABO' : 'HIST',
    'INFOSYSTEM' : 'INFSCI',
    'INFOSYSTEMS' : 'INFSCI',
    'INFSCVAR' : 'INFSCI',
    'INTROTOCOMP' : 'ENGCMP',
    'WORLDPOLITICS' : 'PS',
    'TRIG' : 'MATH',
    'URBANANTH' : 'ANTH',
    'MATHALGEBRA' : 'MATH',
    'ISJAVA' : 'CS',
    'INTROTOPSYCH' : 'PSY',
    'INTROTOPUBSRV' : 'PUBSRV',
    'INTROTOSOC' : 'SOC',
    'INTROTOSOCIAL' : 'SOC',
    'KOR' : 'KOREAN',
    'KOREA' : 'KOREAN',
    'KOREAHIST': 'KOREAN',
    'KOREASECT' : 'KOREAN',
    'CLINPSYCH' : 'PSY',
    'BIOI' : 'BIOSC',
    'BIOIII' : 'BIOSC',
    'BIOIN' : 'BIOSC',
    'BIOL' : 'BIOSC',
    'BIOLA' : 'BIOSC',
    'BIOLOGYI' : 'BIOSC',
    'BIOLOGYII' : 'BIOSC',
    'BIOPS' : 'BIOSC',
    'BIOPSYC' : 'BIOSC',
    'BIOPSYCH' : 'BIOSC',
    'BIOPSYCHOLOGY' : 'BIOSC',
    'BIOS' : 'BIOSC',
    'BIOTHERMO' : 'BIOSC',
    'BISOC' : 'BIOSC',
    'PSYCHALC' : 'PSY',
    'PSYCHPERS' : 'PSY',
    'PSYCHSECT' : 'PSY',
    'PORTUGUESE' : 'PORT',
    'PHYISCS' : 'PHYS',
    'MICROBIO' : 'BIOSC',
    'INTROCULTANTH' : 'ANTH',
    'INTROANTH' : 'ANTH',
    'INTROTOANTRO' : 'ANTH',
    'ITALIAN' : 'ITAL',
    'INTROBIOII' : 'BIOSC',
    'INTROBIO' : 'BIOSC',
    'INTMACRO' : 'ECON',
    'INTMICRO' : 'ECON',
    'ORGANIC' : 'CHEM',
    'ORGANICCHEM' : 'CHEM',
    'ORGANICI' : 'CHEM',
    'SOCOFGENDER' : 'SOC',
    'POLISCI' : 'PS',
    'WPC' : 'ENGCMP',
    'HISTORYSPORT' : 'HIST',
    'HISTPGH' : 'HIST',
    'HISTPITT' : 'HIST',
    'HISTROW' : 'HIST',
    'HONORSMICRO' : 'ECON',
    'ITALIANFILM' : 'ITAL',
    'MICRO' : 'ECON',
    'OCHEM' : 'CHEM',
    'OCHEMI' : 'CHEM',
    'OCHEMII' : 'CHEM',
    'POLTHEORY' : 'PS',
    'POLSCI' : 'PS',
    'POLITICS' : 'PS',
    'PREPFORCALC' : 'MATH',
    'PRECALC' : 'MATH',
    'USFOREIGNPOLI' : 'PS',
    'SPANCONVERSAT' : 'SPAN',
    'SPANII' : 'SPAN',
    'RGLST' : 'RELGST',
    'WORLDPOL' : 'PS',
    'WORLDPOLI' : 'PS',
    'WRITFORPUBLIC' : 'ENGCMP',
    'WWIEUROPE' : 'HIST',
    'WWIIEURO' : 'HIST',
    'SPORTSECON' : 'ECON',
    'ANCARTHISTORY' : 'HIST',
    'PHILOSOPHY' : 'PHIL',
    'PHYSICS' : 'PHYS',
    'HISTORY' : 'HIST'
}

pitt_departments = [
    'ACCT',
    'ADMJ',
    'AFRCNA',
    'AFROTC',
    'ANTH',
    'ARABIC',
    'ARC',
    'ART',
    'ARTSC',
    'ASL',
    'ASTRON',
    'ATHLTR',
    'ASL',
    'ASTRON',
    'ATHLTR',
    'BCMS',
    'BIOENG',
    'BIOETH',
    'BIOSC',
    'BUS',
    'BUSACC',
    'BUSBIS',
    'BUSECN',
    'BUSEVN',
    'BUSERV',
    'BUSFIN',
    'BUSHRM',
    'BUSMKT',
    'BUSORG',
    'BUSQOM',
    'BUSSCM',
    'BUSSPP',
    'CDACCT',
    'CEE',
    'CGS',
    'CHATHM',
    'CHE',
    'CHEM',
    'CHIN',
    'CLASS',
    'CMPINF',
    'COMMRC',
    'CS',
    'CSD',
    'DENHYG',
    'DENT',
    'ECE',
    'ECON',
    'EDUC',
    'EFOP',
    'EM',
    'ENGCMP',
    'ENGFLM',
    'ENGLIT',
    'ENGR',
    'ENGSCI',
    'ENGWRT',
    'FMST',
    'FP',
    'FR',
    'GEOL',
    'GER',
    'GREEK',
    'GREEKM',
    'GSWS',
    'HAA',
    'HEBREW',
    'HHD',
    'HI',
    'HINDI',
    'HIST',
    'HONORS',
    'HPS',
    'HRS',
    'HUN',
    'IE',
    'INFSCI',
    'IRISH',
    'ITAL',
    'JPNSE',
    'JS',
    'KOREAN',
    'LATIN',
    'LCJS',
    'LCTL',
    'LDRSHP',
    'LING',
    'MATH',
    'ME',
    'MEMS',
    'MILS',
    'MUSIC',
    'NPHS',
    'NROSCI',
    'NUR',
    'NUTR',
    'OCS',
    'PEDC',
    'PERS',
    'PETE',
    'PHARM',
    'PHIL',
    'PHYS',
    'PITT',
    'POLISH',
    'PORT',
    'PS',
    'PSY',
    'PUBHLT',
    'PUBSRV',
    'QUECH'
    'REHSCI',
    'RELGST',
    'RUSS',
    'SA',
    'SLAV',
    'SLOVAK',
    'SOC',
    'SOCWRK',
    'SPAN',
    'STAT',
    'SWAHIL',
    'SWE',
    'THEA',
    'TLL',
    'TURKSH',
    'UKRAIN',
    'URBNST',
    'VIET'
]



# Read in reviews as dataframe
url = "https://raw.githubusercontent.com/sim1029/choose-my-professor/alex-ml/cmp-ml/data/predicted_reviews3.csv"
df = pd.read_csv(url, index_col=0)

# Get unique courses from column in df
course_list = df.loc[:, 'course'].astype(str)
course_set = course_list.unique()
course_set.sort()

course_name_mapping = {}
departments = {}

for course in course_set:
    original_course_name = course
    # Remove whitespace
    course = course.replace(' ', '')

    name = ''
    department = ''
    numbers = ''
    # Remove 2nd course in 2 course listings
    for c in course:
        if (c.isdigit() and len(numbers) < 4):
            numbers += c
        else:
            if (len(numbers) > 0):
                break
            else:
                department += c

        name += c

    department = department.upper()

    if department in filtered_departments:
        department = filtered_departments[department]

    # Add leadings zeros to course numbers
    numbers = ('0' * (4 - len(numbers))) + numbers

    course_name_mapping[original_course_name] = (department,numbers)

    if (department in departments):
        departments[department] += 1
    else:
        departments[department] = 1
        
cleaned_course_names = []
i = 0
last_department = ''
for course_name in course_list:
    department = course_name_mapping[course_name][0]
    numbers = course_name_mapping[course_name][1]

    # If there is no course number, mark as blank
    if numbers == '0000':
        cleaned_course_names.append('')
        continue

    # If there is no department name, and the prior review is from the same prof, copy the department
    if (department == '' and i > 0 and df.at[i, 'prof_id'] == df.at[i - 1, 'prof_id']):
        department = last_department

    # If there is still no department name or department is not in list, mark as blank
    if department == '' or department not in pitt_departments:
        cleaned_course_names.append('')
        continue

    cleaned_course_names.append(department + numbers)
    last_department = department
    i += 1

df['cleaned_course'] = cleaned_course_names

# Write to file
file_path = 'reviews_cleaned.csv'
file = open(file_path, "x")
df.to_csv(file_path)