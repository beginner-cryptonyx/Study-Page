import pandas as pd

# Replace 'example.xlsx' with the name of your Excel file
df = pd.read_excel('./extras/Physics_laws.xlsx')

# Filter rows with three cells
df = df[df.count(axis=1) == 3]

# Loop through filtered rows
for index, row in df.iterrows():
    # Print the values of the three cells
    print(
        f"""
        <div class="formula-container">
            <div class="unit">{row[0]}</div>
                <div class="formula green">{row[1]}</div>
            <div class="desc">{row[2]}</div>
        </div>
        """
    )