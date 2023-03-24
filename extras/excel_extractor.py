import pandas as pd
import csv

file = pd.read_excel("The_IGCSE_formula_book_1.xlsx", sheet_name=3, header=None)
rows = file.iloc[4:, 1:4]
rows.to_csv("output.csv", header=False, index=False)

with open("output.csv", "r", encoding="utf-8") as f:
    file = csv.reader(f)
    for row in file:
        with open("output.txt", "a", encoding="utf-8") as x:
            x.write('<div class="formula-container">')
            x.write(f'<div class="unit">{row[0]}</div>')
            x.write(f'<div class="formula">{row[1]}</div>')
            x.write(f'<div class="desc">{row[2]}</div>')
            x.write(f"</div>")
