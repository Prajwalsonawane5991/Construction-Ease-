package constuction.project.data.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String category;
	private String name;
	private String description;
	private double price;

	private String ImagePath;

	@ManyToOne
	@JoinColumn(name = "contractor_id")
	private Contractor contractor;
	
	public Contractor getContractor() {
		return contractor;
	}
	
	public void setContractor(Contractor contractor) {
		this.contractor = contractor;
	}

	public Project() {
		super();
	}

	public Project(long id, String categoty, String name, String description, double price, String imagePath) {
		super();
		this.id = id;
		this.category = categoty;
		this.name = name;
		this.description = description;
		this.price = price;
		ImagePath = imagePath;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String categoty) {
		this.category = categoty;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImagePath() {
		return ImagePath;
	}

	public void setImagePath(String imagePath) {
		ImagePath = imagePath;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", categoty=" + category + ", name=" + name + ", description=" + description
				+ ", price=" + price + ", ImagePath=" + ImagePath;
	}

}