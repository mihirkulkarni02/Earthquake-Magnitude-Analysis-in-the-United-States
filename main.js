//Use eqData.csv to build a scatter plot to examine the relationship between earthquake depth and magnitude

//Set up the chart
fig = plt.figure(figsize=(10, 6))
ax = fig.add_subplot(111)

//Set up the data
x = eqData['mag']
y = eqData['depth']

//Plot the data
ax.scatter(x, y, color='blue', alpha=0.5)

//Set up the labels
ax.set_xlabel('Magnitude')
ax.set_ylabel('Depth (km)')
ax.set_title('Magnitude vs. Depth')

//Show the plot
plt.show()

//Save the plot
fig.savefig('mag_vs_depth.png')

//Close the plot
plt.close()
