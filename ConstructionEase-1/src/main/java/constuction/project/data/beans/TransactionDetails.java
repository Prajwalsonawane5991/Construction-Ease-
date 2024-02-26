package constuction.project.data.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TransactionDetails {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String username;
	private String transactionId;
	private int clientid;



	public TransactionDetails() {
		super();
	}
	
	
	public TransactionDetails(long id, String username, String transactionId,int clientid) {
		super();
		this.id = id;
		this.username = username;
		this.transactionId = transactionId;
		this.clientid = clientid;

	}
	
	
	public int getClientid() {
		return clientid;
	}


	public void setClientid(int clientid) {
		this.clientid = clientid;
	}

	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	
	
	
	@Override
	public String toString() {
		return "TransactionDetails [id=" + id + ", username=" + username + ", transactionId=" + transactionId
				+ "]";
	}
	
	
	

}
