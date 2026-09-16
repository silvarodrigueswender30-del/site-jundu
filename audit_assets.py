from PIL import Image
import os

files = {
    "DSC05816-1-1.png": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\DSC05816-1-1.png",
    "DSC05816-1.png": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\DSC05816-1.png",
    "DSC06625-1.png": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\DSC06625-1.png",
    "Group-9.png": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\Group-9.png",
    "Rectangle-6.png": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\Rectangle-6.png",
    "Rectangle-8-1.png": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\08\Rectangle-8-1.png",
    "Itagua-mini-banner.webp": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\07\Itagua-jundu-home-mini-banner.webp",
    "praia-grande-mini-banner.webp": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\07\praia-grande-jundu-home-mini-banner.webp",
    "Prumirim-mini-banner.webp": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\07\Prumirim-jundu-home-mini-banner.webp",
    "foto-home-1.webp": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\ITENS\junduubatuba.com.br\wp-content\uploads\2023\07\foto-home-1-jundu-600x411.webp",
    "251cfc0d.jpg": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\251cfc0dd164f0cbe7e41ea28894afbe.jpg",
    "40902ee9.jpg": r"C:\Users\Teste\Downloads\Restaurante\ARQUIVOS\40902ee924b2d6f7716bc37b517c44f9.jpg",
}

for name, path in files.items():
    if os.path.exists(path):
        img = Image.open(path)
        print(f"{name}: {img.size[0]}x{img.size[1]} ({img.mode})")
    else:
        print(f"{name}: NOT FOUND")
