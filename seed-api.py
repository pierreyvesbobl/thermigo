import json
import urllib.request

BASE = "http://localhost:3002/api"

# Login
req = urllib.request.Request(f"{BASE}/users/login",
    data=json.dumps({"email":"py.sage@gmail.com","password":"ed94k935"}).encode(),
    headers={"Content-Type":"application/json"})
token = json.loads(urllib.request.urlopen(req).read())["token"]
print("Logged in")

headers = {"Content-Type":"application/json", "Authorization": f"JWT {token}"}

# Get or create category
req = urllib.request.Request(f"{BASE}/categories",
    data=json.dumps({"name":"Chaudières","slug":"chaudieres","description":"Articles sur les chaudières"}).encode(),
    headers=headers)
try:
    cat_id = json.loads(urllib.request.urlopen(req).read())["doc"]["id"]
    print(f"Category created: {cat_id}")
except:
    req = urllib.request.Request(f"{BASE}/categories?where[slug][equals]=chaudieres", headers=headers)
    cat_id = json.loads(urllib.request.urlopen(req).read())["docs"][0]["id"]
    print(f"Category exists: {cat_id}")

def rich(sections):
    children = []
    for s in sections:
        if s[0] == "h2":
            children.append({"type":"heading","tag":"h2","children":[{"type":"text","text":s[1]}],"direction":"ltr","format":"","indent":0,"version":1})
        else:
            children.append({"type":"paragraph","children":[{"type":"text","text":s[1]}],"direction":"ltr","format":"","indent":0,"version":1})
    return {"root":{"type":"root","children":children,"direction":"ltr","format":"","indent":0,"version":1}}

articles = [
    {
        "title": "Comment choisir sa chaudière : guide complet 2026",
        "slug": "comment-choisir-sa-chaudiere-guide-complet-2026",
        "excerpt": "Gaz, fioul, bois, électrique ou pompe à chaleur ? Découvrez tous les critères pour choisir la chaudière la mieux adaptée à votre logement et votre budget.",
        "content": rich([
            ("h2","Les différents types de chaudières"),
            ("p","Le choix d'une chaudière dépend de plusieurs facteurs : la surface de votre logement, votre budget, le type d'énergie disponible et vos objectifs en matière de performance énergétique. En 2026, les solutions se sont considérablement diversifiées."),
            ("h2","Chaudière à condensation"),
            ("p","La chaudière à condensation reste une valeur sûre. Elle récupère la chaleur des fumées de combustion pour préchauffer l'eau de retour, offrant un rendement supérieur à 100%. Son coût d'installation varie entre 3 000 et 7 000 euros."),
            ("h2","Pompe à chaleur hybride"),
            ("p","La PAC hybride combine une pompe à chaleur air-eau et une chaudière à condensation. Elle bascule automatiquement vers la source d'énergie la plus économique selon la température extérieure."),
            ("h2","Notre recommandation"),
            ("p","Chez Thermigo, nous recommandons de faire réaliser un bilan thermique avant tout investissement. Contactez-nous pour un diagnostic gratuit et personnalisé."),
        ]),
        "seo": {"metaTitle":"Comment choisir sa chaudière en 2026 | Thermigo","metaDescription":"Guide complet pour choisir votre chaudière : gaz, fioul, bois, PAC hybride. Comparatif, prix et conseils par les experts Thermigo."},
        "days": 0,
    },
    {
        "title": "Entretien chaudière : obligations et bonnes pratiques",
        "slug": "entretien-chaudiere-obligations-bonnes-pratiques",
        "excerpt": "L'entretien annuel de votre chaudière est obligatoire. Découvrez ce que comprend la visite, son coût et pourquoi il est essentiel pour votre sécurité.",
        "content": rich([
            ("h2","Une obligation légale"),
            ("p","Depuis le décret du 9 juin 2009, l'entretien annuel de toute chaudière d'une puissance comprise entre 4 et 400 kW est obligatoire. Cette visite doit être réalisée par un professionnel qualifié qui délivrera une attestation d'entretien."),
            ("h2","Que comprend l'entretien ?"),
            ("p","Le technicien vérifie le bon fonctionnement de la chaudière, nettoie le brûleur et le corps de chauffe, contrôle les dispositifs de sécurité et mesure le taux de monoxyde de carbone."),
            ("h2","Les bénéfices d'un entretien régulier"),
            ("p","Un entretien régulier permet de réduire votre consommation d'énergie de 8 à 12%, de prolonger la durée de vie de votre équipement et de prévenir les pannes."),
        ]),
        "seo": {"metaTitle":"Entretien chaudière : obligations et conseils | Thermigo","metaDescription":"Tout savoir sur l'entretien obligatoire de votre chaudière. Fréquence, coût, contenu de la visite et conseils pratiques."},
        "days": 3,
    },
    {
        "title": "Chaudière à condensation : fonctionnement et avantages",
        "slug": "chaudiere-a-condensation-fonctionnement-avantages",
        "excerpt": "La chaudière à condensation offre un rendement exceptionnel en récupérant la chaleur des fumées. Découvrez son fonctionnement et ses avantages concrets.",
        "content": rich([
            ("h2","Le principe de la condensation"),
            ("p","Contrairement à une chaudière classique qui évacue les fumées à haute température, la chaudière à condensation récupère la chaleur latente contenue dans la vapeur d'eau des gaz de combustion."),
            ("h2","Un rendement supérieur à 100%"),
            ("p","Grâce à la récupération de chaleur latente, le rendement sur PCI peut dépasser 100%, atteignant couramment 108 à 110%. Cela se traduit par une économie de 15 à 30% sur votre facture de gaz."),
            ("h2","Installation et raccordement"),
            ("p","La chaudière à condensation nécessite une évacuation des condensats vers le réseau d'eaux usées. Un tubage en matériau résistant à l'acidité est requis pour le conduit de fumée."),
        ]),
        "seo": {"metaTitle":"Chaudière à condensation : fonctionnement et avantages | Thermigo","metaDescription":"Découvrez comment fonctionne une chaudière à condensation, ses avantages en rendement énergétique et les économies réalisables."},
        "days": 6,
    },
    {
        "title": "Remplacement de chaudière : quand et pourquoi changer ?",
        "slug": "remplacement-chaudiere-quand-pourquoi-changer",
        "excerpt": "Votre chaudière a plus de 15 ans ? Pannes fréquentes, hausse de consommation... Découvrez les signes qui indiquent qu'il est temps de la remplacer.",
        "content": rich([
            ("h2","Les signes qui ne trompent pas"),
            ("p","Plusieurs indicateurs doivent vous alerter : des pannes de plus en plus fréquentes, une augmentation inexpliquée de votre facture énergétique, des bruits inhabituels, une eau chaude qui met du temps à arriver."),
            ("h2","La durée de vie d'une chaudière"),
            ("p","En moyenne, une chaudière a une durée de vie de 15 à 25 ans selon le type et l'entretien. Au-delà de 15 ans, les performances se dégradent significativement."),
            ("h2","Les aides financières disponibles"),
            ("p","Le remplacement peut bénéficier de nombreuses aides : MaPrimeRénov', CEE, éco-PTZ, TVA réduite. Thermigo vous accompagne dans toutes vos démarches administratives."),
        ]),
        "seo": {"metaTitle":"Quand remplacer sa chaudière ? Signes et conseils | Thermigo","metaDescription":"Découvrez les signes qui indiquent qu'il est temps de remplacer votre chaudière et les aides financières disponibles."},
        "days": 9,
    },
    {
        "title": "Chaudière gaz vs pompe à chaleur : le comparatif",
        "slug": "chaudiere-gaz-vs-pompe-a-chaleur-comparatif",
        "excerpt": "Chaudière gaz ou pompe à chaleur ? Comparatif détaillé des deux solutions pour vous aider à faire le meilleur choix selon votre situation.",
        "content": rich([
            ("h2","Deux philosophies différentes"),
            ("p","La chaudière gaz brûle du combustible pour produire de la chaleur, tandis que la pompe à chaleur puise les calories dans l'air extérieur ou le sol. Chaque technologie a ses forces et ses limites."),
            ("h2","Coût d'installation"),
            ("p","Une chaudière gaz à condensation coûte entre 3 000 et 6 000 € installée. Une PAC air-eau revient entre 8 000 et 15 000 €. Les aides pour la PAC sont plus généreuses."),
            ("h2","Coût d'utilisation"),
            ("p","La PAC consomme environ 3 fois moins d'énergie qu'une chaudière gaz grâce à son COP. L'économie réelle se situe entre 30 et 50% selon les régions."),
        ]),
        "seo": {"metaTitle":"Chaudière gaz vs pompe à chaleur : comparatif 2026 | Thermigo","metaDescription":"Comparatif complet chaudière gaz et pompe à chaleur : coût, performance, aides. Quel est le meilleur choix ?"},
        "days": 12,
    },
    {
        "title": "Chaudière bois et granulés : une alternative écologique",
        "slug": "chaudiere-bois-granules-alternative-ecologique",
        "excerpt": "Le chauffage au bois et aux granulés séduit de plus en plus de foyers. Performance, écologie et économies : tout ce qu'il faut savoir.",
        "content": rich([
            ("h2","Le bois, énergie renouvelable"),
            ("p","Le bois est considéré comme une énergie renouvelable et neutre en carbone. C'est aussi l'énergie de chauffage la moins chère du marché, avec un coût au kWh inférieur au gaz et à l'électricité."),
            ("h2","Chaudière à granulés : le confort automatique"),
            ("p","La chaudière à granulés offre un confort comparable à une chaudière gaz : alimentation automatique depuis un silo, régulation précise de la température. Son rendement atteint 90 à 95%."),
            ("h2","Installation et stockage"),
            ("p","L'installation nécessite un espace de stockage pour le silo à granulés (environ 3 à 4 m²) et un conduit de cheminée conforme. Thermigo réalise l'étude de faisabilité complète."),
        ]),
        "seo": {"metaTitle":"Chaudière bois et granulés : guide complet | Thermigo","metaDescription":"Tout savoir sur la chaudière à bois et granulés : fonctionnement, avantages écologiques, coûts et aides."},
        "days": 15,
    },
    {
        "title": "Panne de chaudière : diagnostic et solutions rapides",
        "slug": "panne-chaudiere-diagnostic-solutions-rapides",
        "excerpt": "Votre chaudière tombe en panne ? Découvrez les pannes les plus courantes, comment les diagnostiquer et quand faire appel à un professionnel.",
        "content": rich([
            ("h2","Les pannes les plus fréquentes"),
            ("p","Les pannes courantes : perte de pression du circuit (manomètre entre 1 et 1,5 bar), défaut d'allumage (électrode ou arrivée de gaz), problème de circulation d'eau (pompe ou vanne 3 voies)."),
            ("h2","Les vérifications à faire soi-même"),
            ("p","Avant d'appeler un technicien : vérifiez l'alimentation électrique, la pression du circuit, le thermostat (piles, réglages), et l'arrivée de gaz. Un simple reset résout parfois le problème."),
            ("h2","Quand appeler un professionnel ?"),
            ("p","Si les vérifications de base ne suffisent pas, faites appel à un chauffagiste qualifié. N'intervenez jamais sur le circuit de gaz. Thermigo assure un dépannage rapide, y compris en urgence."),
        ]),
        "seo": {"metaTitle":"Panne de chaudière : diagnostic et dépannage | Thermigo","metaDescription":"Chaudière en panne ? Diagnostic des pannes courantes, vérifications à faire et solutions rapides."},
        "days": 18,
    },
    {
        "title": "Réglementation chaudières 2026 : ce qui change",
        "slug": "reglementation-chaudieres-2026-ce-qui-change",
        "excerpt": "Nouvelles normes, interdictions, aides renforcées... Faites le point sur la réglementation en vigueur pour les chaudières en 2026.",
        "content": rich([
            ("h2","L'interdiction progressive du fioul"),
            ("p","Depuis juillet 2022, l'installation de chaudières au fioul neuves est interdite. Des dérogations existent lorsqu'aucune alternative n'est techniquement possible. Les chaudières existantes peuvent continuer à fonctionner."),
            ("h2","Les nouvelles exigences RE2020"),
            ("p","La RE2020 impose des seuils stricts d'émissions de CO2 pour les constructions neuves, favorisant les pompes à chaleur, le bois énergie et les réseaux de chaleur."),
            ("h2","Les aides renforcées en 2026"),
            ("p","MaPrimeRénov' a été revalorisée : jusqu'à 5 000 € pour une PAC et 7 000 € pour un système solaire combiné, selon les revenus du foyer."),
        ]),
        "seo": {"metaTitle":"Réglementation chaudières 2026 : nouvelles normes | Thermigo","metaDescription":"Réglementation chaudières 2026 : interdiction du fioul, RE2020, aides MaPrimeRénov'. Le point complet."},
        "days": 21,
    },
    {
        "title": "Thermostat connecté et chaudière : optimisez votre chauffage",
        "slug": "thermostat-connecte-chaudiere-optimisez-chauffage",
        "excerpt": "Un thermostat connecté peut réduire votre facture de chauffage de 15 à 25%. Découvrez comment l'associer à votre chaudière.",
        "content": rich([
            ("h2","Pourquoi passer au thermostat connecté ?"),
            ("p","Le thermostat connecté apprend vos habitudes et adapte le chauffage en temps réel. Il tient compte de la météo, de l'isolation et de votre présence pour optimiser le confort."),
            ("h2","Compatibilité avec votre chaudière"),
            ("p","La plupart des thermostats connectés (Nest, Netatmo, Tado°) sont compatibles avec les chaudières récentes via OpenTherm ou un contact sec."),
            ("h2","Installation par Thermigo"),
            ("p","Nos techniciens installent et configurent votre thermostat connecté pour une communication optimale avec votre chaudière : plages horaires, géolocalisation et scénarios de chauffe."),
        ]),
        "seo": {"metaTitle":"Thermostat connecté et chaudière : guide | Thermigo","metaDescription":"Comment associer un thermostat connecté à votre chaudière pour économiser 15 à 25% sur votre facture."},
        "days": 24,
    },
    {
        "title": "Désembouage chaudière : pourquoi et comment le faire",
        "slug": "desembouage-chaudiere-pourquoi-comment",
        "excerpt": "Le désembouage élimine les boues accumulées dans votre circuit de chauffage. Une opération essentielle pour retrouver des performances optimales.",
        "content": rich([
            ("h2","Qu'est-ce que l'embouage ?"),
            ("p","Avec le temps, des boues se forment dans le circuit de chauffage par corrosion des éléments métalliques et dépôts de calcaire. Ces boues réduisent la circulation de l'eau et les performances."),
            ("h2","Les symptômes d'un circuit emboué"),
            ("p","Radiateurs froids en bas et chauds en haut, bruits de circulation, surconsommation d'énergie, eau noirâtre lors de la purge... Si vous constatez ces signes, un désembouage s'impose."),
            ("h2","Le désembouage professionnel"),
            ("p","Thermigo réalise le désembouage par injection d'un produit de nettoyage, puis rinçage haute pression. Un inhibiteur de corrosion est ajouté pour protéger l'installation. Comptez entre 500 et 1 000 €."),
        ]),
        "seo": {"metaTitle":"Désembouage chaudière : guide complet | Thermigo","metaDescription":"Tout savoir sur le désembouage : symptômes, techniques, coût. Retrouvez des performances optimales avec Thermigo."},
        "days": 27,
    },
]

from datetime import datetime, timedelta

for a in articles:
    d = (datetime.utcnow() - timedelta(days=a["days"])).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    data = {
        "title": a["title"],
        "slug": a["slug"],
        "excerpt": a["excerpt"],
        "content": a["content"],
        "status": "published",
        "publishedAt": d,
        "category": cat_id,
        "seo": a["seo"],
    }
    req = urllib.request.Request(f"{BASE}/posts",
        data=json.dumps(data).encode(),
        headers=headers)
    try:
        res = json.loads(urllib.request.urlopen(req).read())
        print(f"OK: {res['doc']['title']}")
    except Exception as e:
        body = e.read().decode() if hasattr(e, 'read') else str(e)
        print(f"ERR: {a['title']} -> {body[:200]}")
